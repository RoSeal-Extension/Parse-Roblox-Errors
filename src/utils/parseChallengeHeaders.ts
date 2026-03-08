export const GENERIC_CHALLENGE_ID_HEADER = "rblx-challenge-id" as const;
export const GENERIC_CHALLENGE_TYPE_HEADER = "rblx-challenge-type" as const;
export const GENERIC_CHALLENGE_METADATA_HEADER =
  "rblx-challenge-metadata" as const;

export type ChallengeType =
  | "captcha"
  | "forceauthenticator"
  | "forcetwostepverification"
  | "securityquestions"
  | "reauthentication"
  | "proofofwork"
  | "rostile"
  | "privateaccesstoken"
  | "deviceintegrity"
  | "proofofspace"
  | "emailverification"
  | "phoneverification"
  | "blocksession"
  | "biometric";

export type ParsedChallenge = {
  challengeType: ChallengeType;
  challengeId: string;
  challengeBase64Metadata: string;
};

export function parseChallengeHeaders(
  headers: Headers,
): ParsedChallenge | null {
  const challengeType = headers.get(GENERIC_CHALLENGE_TYPE_HEADER) as
    | ChallengeType
    | null;
  const challengeId = headers.get(GENERIC_CHALLENGE_ID_HEADER);
  const challengeBase64Metadata = headers.get(
    GENERIC_CHALLENGE_METADATA_HEADER,
  );

  if (!challengeType || !challengeId || !challengeBase64Metadata) {
    return null;
  }

  return {
    challengeType,
    challengeId,
    challengeBase64Metadata,
  };
}
