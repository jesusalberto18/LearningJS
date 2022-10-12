// easily copy any text to clipboard

const copyToClipboard = (text) =>
navigator.clipboard.writeText(text);
copyToClipboard("Copy this text=>Your Clipboard (Ctrl + C)")
