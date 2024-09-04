import { db } from "@/server/db";
import log from "@/server/log";
import { ResponseType } from "@/types/common.type";
import { NotificationType } from "@/types/notification.type";

export async function createNotificationGroup(
  data: NotificationType
): Promise<ResponseType<NotificationType>> {
  try {
    const result = await db.notification.create({
      data,
    });

    return {
      data: result,
      message: "Notification이 정상적으로 생성되었습니다.",
      success: true,
    };
  } catch (error) {
    log.error(error);
    return {
      data: null,
      message: "Notification을 생성하는데 실패하였습니다.",
      success: false,
    };
  }
}

export async function getSingleNotificationGroup(
  notificationId: string
): Promise<ResponseType<NotificationType>> {
  try {
    const notification: NotificationType = (await db.notification.findFirst({
      where: {
        id: notificationId,
      },
      orderBy: {
        createdAt: "desc",
      },
    })) as unknown as NotificationType;

    if (!notification) {
      return {
        data: null,
        message: "Notification가 존재하지 않습니다.",
        success: false,
      };
    }

    return {
      data: notification,
      message: "Notification을 성공적으로 불러왔습니다.",
      success: true,
    };
  } catch (error) {
    log.error(error);
    return {
      data: null,
      message: "Notification을 불러오는데 실패하였습니다.",
      success: false,
    };
  }
}

export async function getAllNotificationGroups(
  userId: string
): Promise<ResponseType<NotificationType[]>> {
  try {
    const notifications: NotificationType[] = (await db.notification.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    })) as unknown as NotificationType[];

    if (!notifications || notifications.length === 0) {
      return {
        data: null,
        message: "Notifications가 존재하지 않습니다.",
        success: false,
      };
    }

    return {
      data: notifications,
      message: "Notifications을 성공적으로 불러왔습니다.",
      success: true,
    };
  } catch (error) {
    log.error(error);
    return {
      data: null,
      message: "Notifications을 불러오는데 실패하였습니다.",
      success: false,
    };
  }
}

export async function updateNotificationGroup(
  notificationId: string,
  data: NotificationType
): Promise<void> {
  try {
    await db.notification.update({
      where: {
        id: notificationId,
      },
      data,
    });
  } catch (error) {
    log.error(error);
    throw new Error(error);
  }
}

export async function deleteNotificationGroup(
  notificationId: string
): Promise<void> {
  try {
    await db.notification.delete({
      where: {
        id: notificationId,
      },
    });
  } catch (error) {
    log.error(error);
    throw new Error(error);
  }
}
