// utils/sendMessageToExtension.js

export const sendMessageToExtension = ({
  extensionId,
  message,
}: {
  extensionId: string;
  message: { type: string; websites?: string[]; duration?: number };
}) => {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage(extensionId, message, (response) => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        resolve(response);
      }
    });
  });
};
