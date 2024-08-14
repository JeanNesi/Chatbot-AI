import { OpenAiLogo } from "@phosphor-icons/react/dist/ssr";

export const EmptyMessages = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <OpenAiLogo size={48} />
      <p className="text-muted-foreground">Sem mensagens</p>
    </div>
  );
};
