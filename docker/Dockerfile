FROM node:21.6.0-bullseye-slim AS base

LABEL maintainer="Ahmedul Haque Abid <a_h_abid@hotmail.com>"

ARG TIMEZONE="Asia/Dhaka"

ENV TZ="${TIMEZONE}"

USER root

# Always install curl and other basic packages
RUN apt update \
    && apt install -y curl libssl-dev procps telnet tzdata ca-certificates \
    && apt clean \
    && apt autoremove -y \
    && rm -rf /var/lib/apt/lists/*

ARG UID="1000"
ARG GID="1000"

RUN userdel -r node \
    && groupadd --gid ${GID} appuser \
    && useradd --uid ${UID} --create-home --system --comment "AppUser" --shell /bin/bash --gid appuser appuser \
    && mkdir -p /home/appuser/appsrc \
    && chown -R appuser:appuser /home/appuser/appsrc

WORKDIR /home/appuser/appsrc

COPY --chown=appuser:appuser ./codes/package.json ./codes/package-lock*.json ./

USER appuser

######################################################

FROM base AS dev

USER root

RUN apt-get update \
    && apt-get install -y curl libssl-dev procps telnet ca-certificates \
    && rm -rf /var/lib/apt/lists/*

USER appuser

RUN echo "-- Install Local NPM Packages --" \
    && (npm ci --ignore-scripts --no-audit || npm install --ignore-scripts --no-audit)

# Copy all source code from codes directory
COPY --chown=appuser:appuser ./codes/ ./

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

STOPSIGNAL SIGTERM

CMD [ "npm", "run", "dev" ]

######################################################

FROM dev AS builder

USER root

ARG SHOULD_RUN_CHOWN_TO_APPUSER="false"

RUN if [ "${SHOULD_RUN_CHOWN_TO_APPUSER}" = "true" ]; then \
    chown -R appuser:appuser . \
    ;fi

USER appuser

# Disable Next.js telemetry during build
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build \
    && echo "Build completed, checking .next directory:" \
    && ls -la .next/ \
    && echo "Checking for build files:" \
    && ls -la .next/BUILD_ID || echo "No BUILD_ID found" \
    && ls -la .next/server/ || echo "No server directory found" \
    && npm ci --omit=dev --ignore-scripts --no-audit

######################################################

FROM base AS prod

# Copy built application and dependencies from builder
COPY --chown=appuser:appuser --from=builder /home/appuser/appsrc/node_modules ./node_modules
COPY --chown=appuser:appuser --from=builder /home/appuser/appsrc/.next ./.next
COPY --chown=appuser:appuser --from=builder /home/appuser/appsrc/public ./public
COPY --chown=appuser:appuser --from=builder /home/appuser/appsrc/package.json ./package.json
COPY --chown=appuser:appuser --from=builder /home/appuser/appsrc/next.config.ts ./next.config.ts

EXPOSE 3000

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
ENV NEXT_TELEMETRY_DISABLED=1

STOPSIGNAL SIGTERM

CMD [ "npm", "start" ]