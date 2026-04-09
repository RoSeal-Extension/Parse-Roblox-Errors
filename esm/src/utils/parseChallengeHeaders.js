export const GENERIC_CHALLENGE_ID_HEADER = "rblx-challenge-id";
export const GENERIC_CHALLENGE_TYPE_HEADER = "rblx-challenge-type";
export const GENERIC_CHALLENGE_METADATA_HEADER = "rblx-challenge-metadata";
export var ChallengeType;
(function (ChallengeType) {
    ChallengeType["Captcha"] = "captcha";
    ChallengeType["ForceAuthenticator"] = "forceauthenticator";
    ChallengeType["ForceTwoStepVerification"] = "forcetwostepverification";
    ChallengeType["SecurityQuestions"] = "securityquestions";
    ChallengeType["Reauthentication"] = "reauthentication";
    ChallengeType["ProofOfWork"] = "proofofwork";
    ChallengeType["Rostile"] = "rostile";
    ChallengeType["PrivateAccessToken"] = "privateaccesstoken";
    ChallengeType["DeviceIntegrity"] = "deviceintegrity";
    ChallengeType["ProofOfSpace"] = "proofofspace";
    ChallengeType["EmailVerification"] = "emailverification";
    ChallengeType["PhoneVerification"] = "phoneverification";
    ChallengeType["BlockSession"] = "blocksession";
    ChallengeType["Biometric"] = "biometric";
    ChallengeType["Chef"] = "chef";
    ChallengeType["Denied"] = "denied";
    ChallengeType["None"] = "";
})(ChallengeType || (ChallengeType = {}));
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
