// TaiSoc - 聊天頁面 JavaScript 文件

// 語言翻譯資料
const translations = {
    'zh-TW': {
        // 導航欄
        'home': '首頁',
        'explore': '探索',
        'history': '歷史',
        // 按鈕
        'new': '新對話',
        'send': '發送',
        // 歡迎訊息
        'welcome1': '有關於台灣的新知識嗎？',
        'welcome2': '問我吧...',
        // 側邊選單
        'feedback': '意見反饋',
        'setting': '設定',
        'aboutus': '關於我們',
        // Setting 模態窗口
        'profile': '個人資料',
        'topic': '主題',
        'account': '帳戶',
        'yourname': '您的姓名:',
        'howtocallyou': '如何稱呼您:',
        'age': '年齡:',
        'gender': '性別:',
        'language': '語言:',
        'email': '電子郵件:',
        'changepassword': '修改密碼',
        'logoutalldevices': '登出所有裝置',
        'deleteyouraccount': '刪除您的帳戶',
        'confirm': '確認',
        'logout': '登出',
        'delete': '刪除',
        // Feedback 模態窗口
        'feedbacktitle': '意見反饋',
        'feedbacktopic': '主題:',
        'content': '內容:',
        'send': '發送',
        // About us 模態窗口
        'abouttitle': '關於 TaiSoc',
        'aboutdescription1': 'TaiSoc 是一個專注於臺灣社會文化交流的平台，致力於提供有關臺灣的知識和資訊。',
        'aboutdescription2': '我們的使命是促進對臺灣文化、社會和歷史的理解，並提供一個友好的對話空間，讓用戶可以學習和交流。',
        'contactus': '聯繫我們',
        'version': '版本',
        // 其他提示訊息
        'settingsaved': '設定已保存',
        'fillallfields': '請填寫所有欄位',
        'thankforfeedback': '感謝您的反饋！我們會盡快處理。',
        'confirmlogout': '確定要登出所有裝置嗎？',
        'confirmdelete': '警告：此操作將永久刪除您的帳戶和所有資料，且無法恢復！確定要繼續嗎？',
        'selectlanguage': '請選擇語言',
        'comingsoon': '功能即將推出',
        'preview': '預覽',
        'previewnotice': '這是預覽效果。點擊確認以保存設定。',
        'error': '錯誤',
        // 密碼修改相關
        'currentpassword': '當前密碼:',
        'newpassword': '新密碼:',
        'confirmnewpassword': '確認新密碼:',
        'updatepassword': '更新密碼',
        'passwordmismatch': '新密碼與確認密碼不符',
        'passwordtooshort': '新密碼長度應至少為8個字符',
        'passwordupdated': '密碼已成功更新',
        'passwordupdatefailed': '密碼更新失敗',
        'erroroccurred': '發生錯誤，請稍後再試',
        // 性別選項
        'selectgender': '選擇性別',
        'male': '男性',
        'female': '女性', 
        'non-binary': '非二元性別',
        'other': '其他',
        'prefer-not-to-say': '不願透露'
    },
    'en': {
        // Navigation
        'home': 'Home',
        'explore': 'Explore',
        'history': 'History',
        // Buttons
        'new': 'New',
        'send': 'Send',
        // Welcome messages
        'welcome1': 'Any new knowledge about Taiwan?',
        'welcome2': 'Ask me...',
        // Side menu
        'feedback': 'Feedback',
        'setting': 'Setting',
        'aboutus': 'About us',
        // Setting modal
        'profile': 'Profile',
        'topic': 'Topic',
        'account': 'Account',
        'yourname': 'Your Name:',
        'howtocallyou': 'How to call you:',
        'age': 'Age:',
        'gender': 'Gender:',
        'language': 'Language:',
        'email': 'Email:',
        'changepassword': 'Change Password',
        'logoutalldevices': 'Log out all devices',
        'deleteyouraccount': 'Delete your account',
        'confirm': 'Confirm',
        'logout': 'Log out',
        'delete': 'Delete',
        // Feedback modal
        'feedbacktitle': 'Feedback',
        'feedbacktopic': 'Topic:',
        'content': 'Content:',
        'send': 'Send',
        // About us modal
        'abouttitle': 'About TaiSoc',
        'aboutdescription1': 'TaiSoc is a platform focused on Taiwan\'s social and cultural exchange, dedicated to providing knowledge and information about Taiwan.',
        'aboutdescription2': 'Our mission is to promote understanding of Taiwan\'s culture, society, and history, and to provide a friendly space for users to learn and exchange ideas.',
        'contactus': 'Contact Us',
        'version': 'Version',
        // Other messages
        'settingsaved': 'Settings saved',
        'fillallfields': 'Please fill in all fields',
        'thankforfeedback': 'Thank you for your feedback! We will process it as soon as possible.',
        'confirmlogout': 'Are you sure you want to log out of all devices?',
        'confirmdelete': 'Warning: This operation will permanently delete your account and all data, and cannot be recovered! Are you sure you want to continue?',
        'selectlanguage': 'Please select a language',
        'comingsoon': 'Coming soon',
        'preview': 'Preview',
        'previewnotice': 'This is a preview. Click Confirm to save the settings.',
        'error': 'Error',
        // Password change related
        'currentpassword': 'Current Password:',
        'newpassword': 'New Password:',
        'confirmnewpassword': 'Confirm New Password:',
        'updatepassword': 'Update Password',
        'passwordmismatch': 'New password and confirmation do not match',
        'passwordtooshort': 'New password should be at least 8 characters',
        'passwordupdated': 'Password has been successfully updated',
        'passwordupdatefailed': 'Password update failed',
        'erroroccurred': 'An error occurred, please try again later',
        // Gender options
        'selectgender': 'Select Gender',
        'male': 'Male',
        'female': 'Female',
        'non-binary': 'Non-binary',
        'other': 'Other',
        'prefer-not-to-say': 'Prefer not to say'
    }
    // 可以添加其他語言...
};

// 默認語言
let currentLanguage = localStorage.getItem('userLanguage') || 'en';

// 語言預覽函數
function previewLanguage(lang) {
    if (lang && translations[lang]) {
        // 顯示預覽提示
        const languageGroup = document.getElementById('userLanguage').closest('.form-group');
        if (languageGroup) {
            // 移除舊的提示（如果有）
            const oldNotice = document.getElementById('language-preview-notice');
            if (oldNotice) {
                oldNotice.remove();
            }
            
            // 創建新的提示
            const previewNotice = document.createElement('div');
            previewNotice.id = 'language-preview-notice';
            previewNotice.textContent = translations[lang]['previewnotice'] || 'This is a preview. Click Confirm to save.';
            languageGroup.appendChild(previewNotice);
        }
        
        // 臨時更新界面語言，但不保存
        updateUILanguage(lang, true);
    }
}

// 更新界面語言的函數
function updateUILanguage(lang, isPreview = false) {
    if (!translations[lang]) {
        console.error(`Language '${lang}' not supported`);
        return;
    }
    
    if (!isPreview) {
        currentLanguage = lang;
        localStorage.setItem('userLanguage', lang);
    }
    
    const t = translations[lang];
    
    // 更新導航欄
    document.querySelectorAll('.nav-label').forEach(el => {
        const key = el.textContent.toLowerCase();
        if (t[key]) {
            el.textContent = t[key];
        }
    });
    
    // 更新按鈕文字
    if (document.querySelector('.button-text')) {
        document.querySelector('.button-text').textContent = t['new'];
    }
    
    // 更新歡迎訊息
    const welcomeTexts = document.querySelectorAll('.welcome-text');
    if (welcomeTexts.length >= 2) {
        welcomeTexts[0].textContent = t['welcome1'];
        welcomeTexts[1].textContent = t['welcome2'];
    }
    
    // 更新側邊選單項目
    document.querySelectorAll('.menu-text').forEach(el => {
        const key = el.textContent.toLowerCase().replace(/\s+/g, '');
        if (t[key]) {
            el.textContent = t[key];
        }
    });
    
    // 更新 Setting 模態窗口
    const settingModal = document.getElementById('settingModal');
    if (settingModal) {
        // 標題
        settingModal.querySelector('h2').textContent = t['setting'];
        
        // 標籤頁
        const tabs = settingModal.querySelectorAll('.tab');
        if (tabs.length >= 3) {
            tabs[0].textContent = t['profile'];
            tabs[1].textContent = t['topic'];
            tabs[2].textContent = t['account'];
        }
        
        // 表單標籤
        settingModal.querySelectorAll('label').forEach(label => {
            const labelText = label.textContent.trim().toLowerCase().replace(/:/g, '').replace(/\s+/g, '');
            
            if (t[labelText]) {
                label.textContent = t[labelText];
            }
        });
        
        // 更新性別選項
        const genderSelect = document.getElementById('userGender');
        if (genderSelect) {
            const options = genderSelect.options;
            for (let i = 0; i < options.length; i++) {
                const optionValue = options[i].value.toLowerCase();
                if (optionValue === '') {
                    options[i].textContent = t['selectgender'];
                } else if (t[optionValue]) {
                    options[i].textContent = t[optionValue];
                }
            }
        }
        
        // 更新修改密碼按鈕和相關內容
        const passwordSection = document.querySelector('.password-change-section');
        if (passwordSection) {
            const passwordTitle = passwordSection.querySelector('h3');
            if (passwordTitle) {
                passwordTitle.textContent = t['changepassword'];
            }
            
            const passwordBtn = document.getElementById('changePasswordBtn');
            if (passwordBtn) {
                passwordBtn.textContent = t['updatepassword'];
            }
        }
        
        // 更新帳戶操作區域
        const accountActions = settingModal.querySelectorAll('.account-action');
        if (accountActions.length >= 2) {
            accountActions[0].querySelector('span').textContent = t['logoutalldevices'];
            accountActions[0].querySelector('button').textContent = t['logout'];
            accountActions[1].querySelector('span').textContent = t['deleteyouraccount'];
            accountActions[1].querySelector('button').textContent = t['delete'];
        }
        
        // 更新確認按鈕
        settingModal.querySelectorAll('.confirm-btn').forEach(btn => {
            btn.textContent = t['confirm'];
        });
    }
    
    // 更新 Feedback 模態窗口
    const feedbackModal = document.getElementById('feedbackModal');
    if (feedbackModal) {
        feedbackModal.querySelector('h2').textContent = t['feedbacktitle'];
        const labels = feedbackModal.querySelectorAll('label');
        if (labels.length >= 2) {
            labels[0].textContent = t['feedbacktopic'];
            labels[1].textContent = t['content'];
        }
        feedbackModal.querySelector('.send-btn').textContent = t['send'];
    }
    
    // 更新 About us 模態窗口
    const aboutUsModal = document.getElementById('aboutUsModal');
    if (aboutUsModal) {
        aboutUsModal.querySelector('h2').textContent = t['abouttitle'];
        const paragraphs = aboutUsModal.querySelectorAll('.about-content p');
        if (paragraphs.length >= 4) {
            paragraphs[0].textContent = t['aboutdescription1'];
            paragraphs[1].textContent = t['aboutdescription2'];
        }
        const headings = aboutUsModal.querySelectorAll('.about-content h3');
        if (headings.length >= 2) {
            headings[0].textContent = t['contactus'];
            headings[1].textContent = t['version'];
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.log("聊天頁面已載入，初始化...");
    
    // 從localStorage獲取語言設置並應用
    const savedLanguage = localStorage.getItem('userLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
        updateUILanguage(savedLanguage);
    }
    
    // 獲取DOM元素
    const messageInput = document.getElementById("message");
    const chatHistory = document.getElementById("chat-history");
    const welcomeSection = document.querySelector(".chat-welcome");
    const sendButton = document.getElementById("send-btn");
    const dotsButton = document.getElementById("dotsButton");
    const dotsMenu = document.getElementById("dotsMenu");
    
    /* ------------------------------
       1. 聊天功能
    ------------------------------ */
    async function sendMessage() {
        if (!messageInput || !chatHistory) return;
        
        const userMessage = messageInput.value.trim();
        if (userMessage === "") return;
        
        // 第一次送出訊息時，隱藏歡迎區塊
        if (welcomeSection) {
            welcomeSection.style.display = "none";
        }

        // 顯示使用者訊息（右側黑框）
        let userMessageEl = document.createElement("section");
        userMessageEl.classList.add("chat-container");
        userMessageEl.innerHTML = `
            <div class="user-message-container">
                <p class="user-message">${userMessage}</p>
            </div>
        `;
        chatHistory.appendChild(userMessageEl);
        chatHistory.scrollTop = chatHistory.scrollHeight;

        // 清空輸入欄位
        messageInput.value = "";

        // 呼叫後端 /chat API
        try {
            let response = await fetch("/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMessage })
            });
            let result = await response.json();

            // 顯示 AI 回應
            let botMessageEl = document.createElement("section");
            botMessageEl.classList.add("chat-container");
            botMessageEl.innerHTML = `
                <div class="assistant-message-container">
                    <p class="assistant-message">${result.reply}</p>
                </div>
            `;
            chatHistory.appendChild(botMessageEl);
        } catch (error) {
            const t = translations[currentLanguage];
            // 顯示錯誤訊息
            let errorEl = document.createElement("section");
            errorEl.classList.add("chat-container");
            errorEl.innerHTML = `
                <div class="assistant-message-container">
                    <p class="assistant-message">⚠️ ${t['error']}：${error}</p>
                </div>
            `;
            chatHistory.appendChild(errorEl);
        }

        chatHistory.scrollTop = chatHistory.scrollHeight;
    }

    // 綁定發送訊息事件
    if (sendButton) {
        sendButton.addEventListener("click", sendMessage);
    }
    
    // 監聽 Enter 鍵
    if (messageInput) {
        messageInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();  // 防止預設行為
                sendMessage();
            }
        });
    }
    
    /* ------------------------------
       2. 三點選單功能
    ------------------------------ */
    if (dotsButton && dotsMenu) {
        dotsButton.addEventListener("click", (event) => {
            // 切換選單顯示或隱藏
            if (dotsMenu.style.display === "none" || dotsMenu.style.display === "") {
                dotsMenu.style.display = "block";
            } else {
                dotsMenu.style.display = "none";
            }
            // 阻止點擊事件冒泡，避免影響其他點擊處理
            event.stopPropagation();
        });

        // 當使用者點擊頁面其他地方時，自動隱藏選單
        document.addEventListener("click", (event) => {
            if (!dotsButton.contains(event.target) && !dotsMenu.contains(event.target)) {
                dotsMenu.style.display = "none";
            }
        });
    }
    
    /* ------------------------------
       3. New按鈕功能
    ------------------------------ */
    const newButton = document.querySelector(".new-button");
    if (newButton) {
        newButton.addEventListener("click", () => {
            // 清空聊天記錄
            if (chatHistory) {
                chatHistory.innerHTML = "";
            }
            
            // 顯示歡迎區塊
            if (welcomeSection) {
                welcomeSection.style.display = "flex";
            }
        });
    }
    
    // 側邊欄導航項目功能 - 修改部分
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(item => {
        item.addEventListener("click", (event) => {
            event.preventDefault();
            const linkText = item.querySelector(".nav-label").textContent;
            
            const t = translations[currentLanguage];
            
            if (linkText === t['home']) {
                window.location.href = "/chat";  // 導航到聊天頁面
            } else if (linkText === t['history']) {
                // 顯示歷史面板
                const historyPanel = document.getElementById("history-panel");
                if (historyPanel) {
                    historyPanel.style.display = historyPanel.style.display === "flex" ? "none" : "flex";
                }
            } else if (linkText === t['explore']) {
                window.location.href = "/explore";  // 導航到探索頁面
            }
        });
    });
    
    /* ------------------------------
       4. 模態窗口功能 - Setting, Feedback, About us
    ------------------------------ */
    // 顯示 Setting 模態窗口
    function showSettingModal() {
        const modal = document.getElementById("settingModal");
        modal.style.display = "block";
        
        // 設置當前語言
        const userLanguageSelect = document.getElementById('userLanguage');
        if (userLanguageSelect) {
            userLanguageSelect.value = currentLanguage;
        }
        
        // 綁定關閉按鈕事件
        const closeButton = modal.querySelector(".close-button");
        closeButton.onclick = function() {
            modal.style.display = "none";
            
            // 如果使用者沒有確認變更，恢復原始語言設定
            if (userLanguageSelect && userLanguageSelect.value !== currentLanguage) {
                updateUILanguage(currentLanguage);
            }
        };
        
        // 點擊模態窗口外部關閉
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
                
                // 如果使用者沒有確認變更，恢復原始語言設定
                if (userLanguageSelect && userLanguageSelect.value !== currentLanguage) {
                    updateUILanguage(currentLanguage);
                }
            }
        };
        
        // 標籤頁切換
        const profileTab = document.getElementById("profileTab");
        const topicTab = document.getElementById("topicTab");
        const accountTab = document.getElementById("accountTab");
        
        const profileContent = document.getElementById("profileContent");
        const topicContent = document.getElementById("topicContent");
        const accountContent = document.getElementById("accountContent");
        
        profileTab.onclick = function() {
            profileContent.style.display = "block";
            topicContent.style.display = "none";
            accountContent.style.display = "none";
            
            profileTab.classList.add("active");
            topicTab.classList.remove("active");
            accountTab.classList.remove("active");
        };
        
        topicTab.onclick = function() {
            profileContent.style.display = "none";
            topicContent.style.display = "block";
            accountContent.style.display = "none";
            
            profileTab.classList.remove("active");
            topicTab.classList.add("active");
            accountTab.classList.remove("active");
        };
        
        accountTab.onclick = function() {
            profileContent.style.display = "none";
            topicContent.style.display = "none";
            accountContent.style.display = "block";
            
            profileTab.classList.remove("active");
            topicTab.classList.remove("active");
            accountTab.classList.add("active");
        };
        
        // 處理表單提交
        const confirmButtons = modal.querySelectorAll(".confirm-btn");
        confirmButtons.forEach(button => {
            button.onclick = function() {
                const parentContent = button.closest('.tab-content');
                
                // 如果是 Topic 標籤頁
                if (parentContent && parentContent.id === 'topicContent') {
                    const selectedLanguage = document.getElementById('userLanguage').value;
                    if (selectedLanguage) {
                        // 更新界面語言並保存設置
                        updateUILanguage(selectedLanguage);
                    }
                }
                
                const t = translations[currentLanguage];
                alert(t['settingsaved']);
                modal.style.display = "none";
            };
        });
        
        // 處理修改密碼
        const changePasswordBtn = document.getElementById("changePasswordBtn");
        if (changePasswordBtn) {
            changePasswordBtn.onclick = function() {
                const t = translations[currentLanguage];
                const currentPassword = document.getElementById('currentPassword').value;
                const newPassword = document.getElementById('newPassword').value;
                const confirmPassword = document.getElementById('confirmPassword').value;
                const userEmail = document.getElementById('userEmail').value;
                
                // 驗證輸入
                if (!currentPassword || !newPassword || !confirmPassword) {
                    alert(t['fillallfields'] || '請填寫所有密碼欄位');
                    return;
                }
                
                if (newPassword !== confirmPassword) {
                    alert(t['passwordmismatch'] || '新密碼與確認密碼不符');
                    return;
                }
                
                if (newPassword.length < 8) {
                    alert(t['passwordtooshort'] || '新密碼長度應至少為8個字符');
                    return;
                }
                
                // 發送密碼修改請求到後端
                fetch('/api/change-password', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: userEmail,
                        currentPassword: currentPassword,
                        newPassword: newPassword
                    })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        alert(data.message || '密碼已成功更新');
                        // 清空密碼欄位
                        document.getElementById('currentPassword').value = '';
                        document.getElementById('newPassword').value = '';
                        document.getElementById('confirmPassword').value = '';
                    } else {
                        alert(data.message || '密碼更新失敗');
                    }
                })
                .catch(error => {
                    console.error('更新密碼時出錯:', error);
                    alert(t['erroroccurred'] || '發生錯誤，請稍後再試');
                });
            };
        }
        
        // 處理登出
        const logoutBtn = modal.querySelector(".logout-btn");
        if (logoutBtn) {
            logoutBtn.onclick = function() {
                const t = translations[currentLanguage];
                if (confirm(t['confirmlogout'])) {
                    // 這裡可以添加登出邏輯
                    window.location.href = "/";
                }
            };
        }
        
        // 處理刪除帳戶
        const deleteBtn = modal.querySelector(".delete-btn");
        if (deleteBtn) {
            deleteBtn.onclick = function() {
                const t = translations[currentLanguage];
                if (confirm(t['confirmdelete'])) {
                    // 這裡可以添加刪除帳戶邏輯
                    window.location.href = "/";
                }
            };
        }
    }

    // 顯示 Feedback 模態窗口
    function showFeedbackModal() {
        const modal = document.getElementById("feedbackModal");
        modal.style.display = "block";
        
        // 綁定關閉按鈕事件
        const closeButton = modal.querySelector(".close-button");
        closeButton.onclick = function() {
            modal.style.display = "none";
        };
        
        // 點擊模態窗口外部關閉
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        };
        
        // 發送反饋
        const sendButton = modal.querySelector(".send-btn");
        sendButton.onclick = function() {
            const topic = document.getElementById("feedbackTopic").value;
            const content = document.getElementById("feedbackContent").value;
            
            const t = translations[currentLanguage];
            
            if (!topic || !content) {
                alert(t['fillallfields']);
                return;
            }
            
            // 這裡可以添加發送反饋到後端的代碼
            alert(t['thankforfeedback']);
            modal.style.display = "none";
            
            // 清空表單
            document.getElementById("feedbackTopic").value = "";
            document.getElementById("feedbackContent").value = "";
        };
    }

    // 顯示 About us 模態窗口
    function showAboutUsModal() {
        const modal = document.getElementById("aboutUsModal");
        modal.style.display = "block";
        
        // 綁定關閉按鈕事件
        const closeButton = modal.querySelector(".close-button");
        closeButton.onclick = function() {
            modal.style.display = "none";
        };
        
        // 點擊模態窗口外部關閉
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        };
    }
    
    // 側邊選單項目功能
    const menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            const menuText = item.querySelector(".menu-text").textContent;
            const t = translations[currentLanguage];
            
            if (menuText === t['feedback']) {
                showFeedbackModal();
            } else if (menuText === t['setting']) {
                showSettingModal();
            } else if (menuText === t['aboutus']) {
                showAboutUsModal();
            }
            
            // 點擊後關閉選單
            if (dotsMenu) {
                dotsMenu.style.display = "none";
            }
        });
    });
    
    // 全局函數暴露到 window，使 HTML 直接調用
    window.previewLanguage = previewLanguage;
});