import React from "react";
import { IconButton, useToast } from "@chakra-ui/react";
import { CheckCircleIcon, CopyIcon } from "@chakra-ui/icons";
import useClipboard from "react-use-clipboard";

type CopyLinkToClipboardButtonInput = { duration: number; url: string };

const CopyLinkToClipboardButton = ({
  duration,
  url,
}: CopyLinkToClipboardButtonInput) => {
  const [isCopied, setCopied] = useClipboard(url, {
    successDuration: duration,
  });
  const toast = useToast();
  return (
    <IconButton
      aria-label="Add this link to another list"
      icon={isCopied ? <CheckCircleIcon color="green" /> : <CopyIcon />}
      onClick={() => {
        setCopied();
        toast({
          title: "Link copied to clipboard.",
          status: "success",
          duration: duration,
          isClosable: true,
        });
      }}
      size="sm"
      variant="ghost"
    />
  );
};

export { CopyLinkToClipboardButton };
