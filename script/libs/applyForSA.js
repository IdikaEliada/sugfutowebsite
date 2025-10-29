
  const MAKE_WEBHOOK = 'https://hook.eu2.make.com/ehv8owbn441rgalatugmahjasoyja3g5';

 export function submitApplication (form){
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      level: e.target.level.value,
      faculty: e.target.faculty.value,
      department: e.target.department.value,
      message: e.target.message.value,
      phone: e.target.phone.value
    };

    const res = await fetch(MAKE_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    document.getElementById('status').textContent = res.ok ? 'Application Sent to WhatsApp!' : 'Error';
    document.getElementById('status').style.color = res.ok ? 'green' : 'red';
    if (res.ok) e.target.reset();
  });
 }