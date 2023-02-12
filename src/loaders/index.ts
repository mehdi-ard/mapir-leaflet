interface LoadersProps {
  onError: () => void;
  onLoad: () => void;
}

export default (props: LoadersProps) => {
  const { onError, onLoad } = props;
  const createScriptLoader = () => {
    if (window.L) {
      if (onLoad) onLoad();
      return;
    } else {
      onError();
      return;
    }
  };

  return createScriptLoader();
};
