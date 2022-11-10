function sendMail()
{
    var params=
    {
        from_name:document.getElementById("fullname").value,
        email_id:document.getElementById("email_id").value,
        message:document.getElementById("message").value
    }
    emailjs.send("service_cy8ifxa","template_iy3vb1n",params).then(function(res)
    {
        alert("success!"+res.status);
    })
}