const observeStore = (store, select, onChange) => {
  let current;

  const handleChange = () => {
    const next = select(store.getState());
    if (next !== current) {
      current = next;
      onChange(current);
    }
  };

  const unsubscribe = store.subscribe(handleChange);
  handleChange();

  return unsubscribe;
};

export default observeStore;
