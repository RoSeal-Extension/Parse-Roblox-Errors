"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GENERIC_CHALLENGE_METADATA_HEADER = exports.GENERIC_CHALLENGE_TYPE_HEADER = exports.GENERIC_CHALLENGE_ID_HEADER = void 0;
exports.parseChallengeHeaders = parseChallengeHeaders;
exports.GENERIC_CHALLENGE_ID_HEADER = "rblx-challenge-id";
exports.GENERIC_CHALLENGE_TYPE_HEADER = "rblx-challenge-type";
exports.GENERIC_CHALLENGE_METADATA_HEADER = "rblx-challenge-metadata";
function parseChallengeHeaders(headers) {
    const challengeType = headers.get(exports.GENERIC_CHALLENGE_TYPE_HEADER);
    const challengeId = headers.get(exports.GENERIC_CHALLENGE_ID_HEADER);
    const challengeBase64Metadata = headers.get(exports.GENERIC_CHALLENGE_METADATA_HEADER);
    if (!challengeType || !challengeId || !challengeBase64Metadata) {
        return null;
    }
    return {
        challengeType,
        challengeId,
        challengeBase64Metadata,
    };
}
