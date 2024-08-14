import Markdown from "react-markdown";

interface IMessage {
  message: string;
  userMessage: boolean;
}

const UserMessage = ({ message }: Omit<IMessage, "userMessage">) => (
  <div className="bg-slate-600 text-white m-0 text-whi px-3 rounded-lg max-w-[80%] ml-auto">
    <Markdown className="m-0">{message}</Markdown>
  </div>
);

const BotMessage = ({ message }: Omit<IMessage, "userMessage">) => (
  <div className="bg-slate-600 text-white px-3 rounded-lg max-w-[80%] w-fit">
    <Markdown>{message}</Markdown>
  </div>
);

export const Message = ({ message, userMessage }: IMessage) =>
  userMessage ? (
    <UserMessage message={message} />
  ) : (
    <BotMessage message={message} />
  );
