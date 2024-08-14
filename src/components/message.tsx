interface IMessage {
  message: string;
  userMessage: boolean;
}

const UserMessage = ({ message }: Omit<IMessage, "userMessage">) => (
  <div className="flex max-w-80 ml-auto">
    <div className="bg-blue-500 text-whi p-2 rounded-lg">{message}</div>
  </div>
);

const BotMessage = ({ message }: Omit<IMessage, "userMessage">) => (
  <div className="flex justify-end max-w-80">
    <div className="bg-gray-200 p-2 rounded-lg">{message}</div>
  </div>
);

export const Message = ({ message, userMessage }: IMessage) =>
  userMessage ? (
    <UserMessage message={message} />
  ) : (
    <BotMessage message={message} />
  );
