const changeFormatDate = data => {
  const date = new Date(data);
  const formatData = date.toLocaleString().split(',')[0].split('.').join('-');
  return formatData;
};

export default changeFormatDate;
