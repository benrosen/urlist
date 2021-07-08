import { CheckCircleIcon, CopyIcon } from "@chakra-ui/icons";
import { IconButton, useToast } from "@chakra-ui/react";

import { CopyButtonProps } from "./CopyButton.props";
import React from "react";
import config from "./CopyButton.config.json";
import useClipboard from "react-use-clipboard";

/**
 * The CopyButton component copies the provided value to the clipboard and displays a toast when clicked.
 */
export const CopyButton = (props: CopyButtonProps): JSX.Element => {
  const [isCopied, setCopied] = useClipboard(props.value, {
    successDuration: config.toast.duration,
  });
  const toast = useToast();
  return (
    <IconButton
      aria-label="Copy URL"
      icon={isCopied ? <CheckCircleIcon color="green" /> : <CopyIcon />}
      onClick={() => {
        setCopied();
        toast({
          title: config.toast.title,
          status: "success",
          duration: config.toast.duration,
          isClosable: true,
        });
      }}
      size="sm"
      variant="ghost"
    />
  );
};
