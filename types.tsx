/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  ChatRoom: undefined;
};

export type MainTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
};


export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type User = {
  id:string;
  name:string;
  imageUri:string;
};

export type Message = {
  id: string;
  content:string;
  createdAt:string;
};

export type ChatRoom = {
  id:string;
  users:User[];
  lastMessage:Message;
}
