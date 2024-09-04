export type NotificationType = {
  id?: string;
  userId: string;
  groupName: string;
  emails: string;
  createdAt?: Date;
};

export type EmailLocalsType = {
  sender?: string;
  appLink: string;
  appIcon: string;
  appName: string;
  subject?: string;
  username?: string;
};
