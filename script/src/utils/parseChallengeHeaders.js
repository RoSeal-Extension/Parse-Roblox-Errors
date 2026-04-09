"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChallengeType = exports.GENERIC_CHALLENGE_METADATA_HEADER = exports.GENERIC_CHALLENGE_TYPE_HEADER = exports.GENERIC_CHALLENGE_ID_HEADER = void 0;
exports.parseChallengeHeaders = parseChallengeHeaders;
exports.GENERIC_CHALLENGE_ID_HEADER = "rblx-challenge-id";
exports.GENERIC_CHALLENGE_TYPE_HEADER = "rblx-challenge-type";
exports.GENERIC_CHALLENGE_METADATA_HEADER = "rblx-challenge-metadata";
var ChallengeType;
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
})(ChallengeType || (exports.ChallengeType = ChallengeType = {}));
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
