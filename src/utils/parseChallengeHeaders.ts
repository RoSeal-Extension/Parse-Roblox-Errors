export const GENERIC_CHALLENGE_ID_HEADER = "rblx-challenge-id" as const;
export const GENERIC_CHALLENGE_TYPE_HEADER = "rblx-challenge-type" as const;
export const GENERIC_CHALLENGE_METADATA_HEADER =
  "rblx-challenge-metadata" as const;

export enum ChallengeType {
  Captcha = "captcha",
  ForceAuthenticator = "forceauthenticator",
  ForceTwoStepVerification = "forcetwostepverification",
  SecurityQuestions = "securityquestions",
  Reauthentication = "reauthentication",
  ProofOfWork = "proofofwork",
  Rostile = "rostile",
  PrivateAccessToken = "privateaccesstoken",
  DeviceIntegrity = "deviceintegrity",
  ProofOfSpace = "proofofspace",
  EmailVerification = "emailverification",
  PhoneVerification = "phoneverification",
  BlockSession = "blocksession",
  Biometric = "biometric",
  Chef = "chef",
  Denied = "denied",
  TwoStepVerification = "twostepverification",
  None = "",
}

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
