export const useWakafListHeader = () => {
  const openWakafForm = () => {};

  const handlePressSearch = (query: string) => {};

  const profile = {
    fullName: '',
    initialName: '',
  };

  const nameFormatted = '';
  const nameInitial = '';

  return {
    openWakafForm,
    profile,
    nameFormatted,
    nameInitial,
    handlePressSearch,
  };
};

export type UseWakafListHeader = typeof useWakafListHeader;
