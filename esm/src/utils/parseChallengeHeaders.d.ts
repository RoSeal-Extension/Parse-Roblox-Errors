export declare const GENERIC_CHALLENGE_ID_HEADER: "rblx-challenge-id";
export declare const GENERIC_CHALLENGE_TYPE_HEADER: "rblx-challenge-type";
export declare const GENERIC_CHALLENGE_METADATA_HEADER: "rblx-challenge-metadata";
export declare enum ChallengeType {
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
    None = ""
}
export type ParsedChallenge = {
    challengeType: ChallengeType;
    challengeId: string;
    challengeBase64Metadata: string;
};
export declare function parseChallengeHeaders(headers: Headers): ParsedChallenge | null;
