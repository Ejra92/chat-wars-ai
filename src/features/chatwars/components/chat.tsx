"use client";
import type { FC } from 'react';

import { Fragment } from 'react';
import { useChat } from '@ai-sdk/react';
import { CopyIcon, RefreshCcwIcon } from 'lucide-react';

import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from '@/components/ai-elements/conversation';
import { Message, MessageContent } from '@/components/ai-elements/message';
import {
  PromptInput,
  PromptInputBody,
  type PromptInputMessage,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputToolbar,
} from '@/components/ai-elements/prompt-input';
import { Action, Actions } from '@/components/ai-elements/actions';
import { Response } from '@/components/ai-elements/response';
import {
  Source,
  Sources,
  SourcesContent,
  SourcesTrigger,
} from '@/components/ai-elements/sources';
import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from '@/components/ai-elements/reasoning';
import { Loader } from '@/components/ai-elements/loader';

interface ChatProps {
  show: boolean
};

export const Chat: FC<ChatProps> = ({ show }) => {
  const { messages, sendMessage, status, regenerate } = useChat();

  const handleSubmit = (message: PromptInputMessage) => {
    const hasText = Boolean(message.text);

    if (!(hasText)) {
      return;
    }

    sendMessage({ text: message.text! });
  };

  if (!show) {
    return <></>;
  }

  return (
    <div className="w-[300px] size-full h-100 border bg-[#151515] rounded-lg mb-4">
      <div className="flex flex-col h-full">
        <Conversation className="h-full rounded-tr-lg">
          <ConversationContent>
            {messages.map((message) => (
              <div key={message.id}>
                {message.role === 'assistant' && message.parts.filter((part) => part.type === 'source-url').length > 0 && (
                  <Sources>
                    <SourcesTrigger
                      count={
                        message.parts.filter(
                          (part) => part.type === 'source-url',
                        ).length
                      }
                    />

                    {message.parts.filter((part) => part.type === 'source-url').map(
                      (part, i) => (
                        <SourcesContent key={`${message.id}-${i}`}>
                          <Source
                            key={`${message.id}-${i}`}
                            href={part.url}
                            title={part.url}
                          />
                        </SourcesContent>
                      )
                    )}
                  </Sources>
                )}
                {message.parts.map((part, i) => {
                  switch (part.type) {
                    case 'text':
                      return (
                        <Fragment key={`${message.id}-${i}`}>
                          <Message from={message.role}>
                            <MessageContent>
                              <Response>
                                {part.text}
                              </Response>
                            </MessageContent>
                          </Message>
                          {message.role === 'assistant' && message.id === messages.at(-1)?.id && (
                            <Actions className="mt-2">
                              <Action
                                onClick={() => regenerate()}
                                label="Retry"
                              >
                                <RefreshCcwIcon className="size-3" />
                              </Action>
                              <Action
                                onClick={() =>
                                  navigator.clipboard.writeText(part.text)
                                }
                                label="Copy"
                              >
                                <CopyIcon className="size-3" />
                              </Action>
                            </Actions>
                          )}
                        </Fragment>
                      );
                    case 'reasoning':
                      return (
                        <Reasoning
                          key={`${message.id}-${i}`}
                          className="w-full"
                          isStreaming={status === 'streaming' && i === message.parts.length - 1 && message.id === messages.at(-1)?.id}
                        >
                          <ReasoningTrigger />
                          <ReasoningContent>{part.text}</ReasoningContent>
                        </Reasoning>
                      );
                    default:
                      return null;
                  }
                })}
              </div>
            ))}
            {status === 'submitted' && <Loader />}
          </ConversationContent>
          <ConversationScrollButton variant="secondary" />
        </Conversation>

        <PromptInput maxFiles={0} onSubmit={handleSubmit}>
          <PromptInputBody>
            <PromptInputTextarea
              autoFocus
              placeholder="ChatWars - AI is waiting for your question!"
              className="max-h-16"
            />
          </PromptInputBody>

          <PromptInputToolbar className="justify-end">
            <PromptInputSubmit
              disabled={status === 'streaming'}
              status={status === 'error' ? undefined : status}
              className="cursor-pointer"
            />
          </PromptInputToolbar>
        </PromptInput>
      </div>
    </div>
  );
};
