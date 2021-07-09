export interface ChatMessage {
    BodyOriginal: string;
    BodyTranlated: string;
    DateTimeToCreate: string;
    Direction: number;
    ExtraData: string;
    FontAttrID: number;
    FontSizeID: number;
    IsTranlate: boolean;
    LastUpdateKEY: string;
    LoginNameFROM: string;
    LoginNameTO: string;
    LunaMessageTypeID: number;
    MessageID: number;
    MessageTypeID: number;
    ReadyMessageID: number;
    Room: string;
    Seen: boolean;
    StatusID: number;
    SupporterActionID: number;
    TPPP: string;
    TemplateCode: string;
    TranlatedLAGISO: string;
    TranslatedHumanID: number;
    TranslationTypeID: number;
    Versioning: boolean;
    showFace: boolean;
    conversationStart: string;
    time: string;
    extraInfo: {};
    showTranslate: boolean;
    translateText: string;
    originalText: string;
    isEmoj: boolean;
}