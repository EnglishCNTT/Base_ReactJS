export const getValueDescription = (data) => {
  const URL_REGEX = /(((http(s)?:\/\/)|(www\.))[^\s!$^*()[\]{};'",<>`~]+)/g;
  const content = data
    ?.replace(/</g, "&lt;")
    ?.replace(/>/g, "&gt;")
    ?.replace("\n", "<br />");
  const description = `${content
    .replace(URL_REGEX, function ($1) {
      if ($1.indexOf("www") === 0) {
        return `<a href="http://${$1}" target="_blank" class="text-link">${$1}</a>`;
      } else return `<a href="${$1}" target="_blank" class="text-link">${$1}</a>`;
    })
    .replace(/\n/g, "<br/>")}`;
  return <div dangerouslySetInnerHTML={{ __html: description }} />;
};
