export const GENERIC_CHALLENGE_ID_HEADER = "rblx-challenge-id";
export const GENERIC_CHALLENGE_TYPE_HEADER = "rblx-challenge-type";
export const GENERIC_CHALLENGE_METADATA_HEADER = "rblx-challenge-metadata";
export function parseChallengeHeaders(headers) {
    const challengeType = headers.get(GENERIC_CHALLENGE_TYPE_HEADER);
    const challengeId = headers.get(GENERIC_CHALLENGE_ID_HEADER);
    const challengeBase64Metadata = headers.get(GENERIC_CHALLENGE_METADATA_HEADER);
    if (!challengeType || !challengeId || !challengeBase64Metadata) {
        return null;
    }
    return {
        challengeType,
        challengeId,
        challengeBase64Metadata,
    };
}
