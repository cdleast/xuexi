// 初始化firebase对象
var config = {
    apiKey: "AIzaSyBC1G95nkwJ3zheBDpqTwwXxXPsZYEAV14",
    authDomain: "contactform-6a57e.firebaseapp.com",
    databaseURL: "https://contactform-6a57e.firebaseio.com",
    projectId: "contactform-6a57e",
    storageBucket: "contactform-6a57e.appspot.com",
    messagingSenderId: "331161200819"
};
firebase.initializeApp(config);

// 创建一个collection
var messageRef = firebase.database().ref('message');

// 1.添加submit事件
document.getElementById('contactForm').addEventListener("submit", submitForm);

function submitForm(e) {
	// 阻止默认事件
    e.preventDefault();

    // 2.获取input中的值
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // 存储数据
    saveMessage(name, company, email, phone, message);

    // 展示alert
    document.querySelector(".alert").style.display = "block";

    // 3秒消失alert
    setTimeout(function() {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    // 清除表单
    document.getElementById('contactForm').reset();
}

// 2.获取input中的值的函数
function getInputVal(id) {
    return document.getElementById(id).value;
}

function saveMessage(name, company, email, phone, message) {
    messageRef.push({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}