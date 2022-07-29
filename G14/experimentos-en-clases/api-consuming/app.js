$(document).ready(() => {
  const organizationId = 1;
  const projectId = 1;
  const userId = 1;
  
  fetch({
    headers: {
      'Content-Type': 'application/json',

    }
  })
  $.ajax(
    `https://api.jetbrokers.io/api/gallery/details/${organizationId}/${projectId}/${userId}`
  ).done((response) => {
    // crear la tabla
  });
});
