import { Download, FileText } from "lucide-react";
import { ReactNode } from "react";

export type ResumeLanguage = "en" | "zh-tw" | "zh-cn";

export interface ResumeLanguageConfig {
  key: ResumeLanguage;
  label: string;
  button: ReactNode;
  content: ReactNode;
}

export const RESUME_LANGUAGES: ResumeLanguageConfig[] = [
  {
    key: "en",
    label: "English",
    button: (
      <>
        <Download className="mr-2 h-4 w-4" /> Download Resume
      </>
    ),
    content: (
      <>
        <div className="text-lg font-bold mb-2">
          Contact me to get my resume
        </div>
        <div className="mb-2">
          Email: <span className="font-mono">jake0627a1@gmail.com</span>
        </div>
        <div className="text-sm text-muted-foreground">
          Please email me if you would like to receive my resume.
        </div>
      </>
    ),
  },
  {
    key: "zh-tw",
    label: "繁體中文",
    button: (
      <>
        <FileText className="mr-2 h-4 w-4" /> 繁體中文
      </>
    ),
    content: (
      <>
        <div className="text-lg font-bold mb-2">如需下載履歷，請聯絡我</div>
        <div className="mb-2">
          電子郵件: <span className="font-mono">jake0627a1@gmail.com</span>
        </div>
        <div className="text-sm text-muted-foreground">
          若您需要我的履歷，請來信聯絡。
        </div>
      </>
    ),
  },
  {
    key: "zh-cn",
    label: "简体中文",
    button: (
      <>
        <FileText className="mr-2 h-4 w-4" /> 简体中文
      </>
    ),
    content: (
      <>
        <div className="text-lg font-bold mb-2">如需下载简历，请联系我</div>
        <div className="mb-2">
          邮箱: <span className="font-mono">jake0627a1@gmail.com</span>
        </div>
        <div className="text-sm text-muted-foreground">
          如需获取我的简历，请发送邮件联系。
        </div>
      </>
    ),
  },
];
