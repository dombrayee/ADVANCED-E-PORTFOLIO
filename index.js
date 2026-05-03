//template_krcay8n
//service_4zyaozo
//5B9m400C7RuSN3GVi

function contact(event) {
  event.preventDefault();

  emailjs.sendForm(
    'service_4zyaozo',
    'template_krcay8n',
    event.target,
    'yBm-gXndMDSxavcz6'
  ).then(() => {
    console.log('It worked')
  }) .catch((error) => {
    console.log(error);
  });
}
  

    