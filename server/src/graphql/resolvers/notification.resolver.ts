import {
  createNotificationGroup,
  deleteNotificationGroup,
  getAllNotificationGroups,
  updateNotificationGroup,
} from "@/services/notification.service";
import { AppContextType } from "@/types/common.type";
import { NotificationType } from "@/types/notification.type";
import { authenticateGroupQLRoute } from "@/utils/checkSession.util";

export const NotificationResolver = {
  Query: {
    async getUserNotificationGroups(
      _: undefined,
      { userId }: { userId: string },
      contextValue: AppContextType
    ) {
      const { req } = contextValue;
      authenticateGroupQLRoute(req);

      const notifications = await getAllNotificationGroups(userId);

      return {
        notifications,
      };
    },
  },

  Mutation: {
    async createNotificationGroup(
      _: undefined,
      args: { group: NotificationType },
      contextValue: AppContextType
    ) {
      const { req } = contextValue;
      authenticateGroupQLRoute(req);

      const notification = await createNotificationGroup(args.group);

      return {
        notifications: [notification],
      };
    },

    async updateNotificationGroup(
      _: undefined,
      args: { notificationId: string; group: NotificationType },
      contextValue: AppContextType
    ) {
      const { req } = contextValue;
      const { notificationId, group } = args;
      authenticateGroupQLRoute(req);

      await updateNotificationGroup(notificationId, group);

      const notification = { ...group, id: notificationId };

      return {
        notifications: [notification],
      };
    },

    async deleteNotificationGroup(
      _: undefined,
      args: { notificationId: string },
      contextValue: AppContextType
    ) {
      const { req } = contextValue;
      const { notificationId } = args;
      authenticateGroupQLRoute(req);

      await deleteNotificationGroup(notificationId);

      return {
        id: notificationId,
      };
    },
  },
};
