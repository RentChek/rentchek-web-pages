angular.module("templates-client", ["templates/controllers/404.tpl.html", "templates/controllers/account/account.tpl.html", "templates/controllers/auth/auth-forgot.tpl.html", "templates/controllers/auth/auth-login.tpl.html", "templates/controllers/auth/auth-reset.tpl.html", "templates/controllers/auth/auth-signup.tpl.html", "templates/controllers/expenses/expenses.tpl.html", "templates/controllers/finances/finances.tpl.html", "templates/controllers/properties/properties.tpl.html", "templates/controllers/receipts/receipts.tpl.html", "templates/controllers/welcome/welcome-acceptableuse.tpl.html", "templates/controllers/welcome/welcome-privacy.tpl.html", "templates/controllers/welcome/welcome-terms.tpl.html", "templates/directives/expense/expense-directive.tpl.html", "templates/directives/expense/expense-list-directive.tpl.html", "templates/directives/expense/expense-month-directive.tpl.html", "templates/directives/expense/expense-type-directive.tpl.html", "templates/directives/finances/finances-timeline-directive.tpl.html", "templates/directives/finances/finances-year-charts-directive.tpl.html", "templates/directives/finances/finances-year-directive.tpl.html", "templates/directives/finances/finances-year-export-directive.tpl.html", "templates/directives/finances/finances-year-slider-directive.tpl.html", "templates/directives/menu/menu-directive.tpl.html", "templates/directives/payment/payment-directive.tpl.html", "templates/directives/payment/payment-month-directive.tpl.html", "templates/directives/property/create-property-directive.tpl.html", "templates/directives/property/property-directive.tpl.html", "templates/directives/property/property-vacate-directive.tpl.html", "templates/directives/share-footer-directive.tpl.html", "templates/directives/timeline/timeline-directive.tpl.html", "templates/layouts/center.tpl.html", "templates/layouts/side-menu.tpl.html"]);

angular.module("templates/controllers/404.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/controllers/404.tpl.html",
    "<div>\n" +
    "	<section class=\"container\">\n" +
    "		<h3><span>Not Found :(</span></h3>\n" +
    "		\n" +
    "		<p>Sorry, but the page you were trying to view does not exist. It looks like this was the result of either:</p>\n" +
    "		<ul>\n" +
    "			<li>a mistyped address?</li>\n" +
    "			<li>an out-of-date link?</li>\n" +
    "			<li>something we did wrong?</li>\n" +
    "		</ul>\n" +
    "		<p>Would you like to just <a href=\"/\">go back to the homepage</a>?</p>\n" +
    "	</section>\n" +
    "</div>\n" +
    "\n" +
    "<script>\n" +
    "	var GOOG_FIXURL_LANG = (navigator.language || '').slice(0,2),GOOG_FIXURL_SITE = location.host;\n" +
    "</script>\n" +
    "<script src=\"http://linkhelp.clients.google.com/tbproxy/lh/wm/fixurl.js\"></script>\n" +
    "");
}]);

angular.module("templates/controllers/account/account.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/controllers/account/account.tpl.html",
    "<div>\n" +
    "	<div>\n" +
    "		<h3><span>Account</span></h3>\n" +
    "		\n" +
    "		<loading-indicator active=\"loading\"></loading-indicator>\n" +
    "		\n" +
    "		<div class=\"alert\" ng-class=\"{success: saved}\">Your account was updated without a hitch!</div>\n" +
    "		<div class=\"alert error\" ng-repeat=\"error in errors\">{{error}}</div>\n" +
    "		\n" +
    "		<form ng-if=\"!loading\" ng-submit=\"editAccount()\">\n" +
    "			<input ng-model=\"editUser.name\" ng-readonly=\"saved\" placeholder=\"Name\" type=\"text\" />\n" +
    "			<input ng-model=\"editUser.email\" ng-readonly=\"saved\" placeholder=\"Email\" type=\"email\" />\n" +
    "			<input ng-model=\"editUser.password\" ng-readonly=\"saved\" placeholder=\"New Password\" type=\"password\" autocomplete=\"off\" />\n" +
    "			<input ng-model=\"editUser.currency\" ng-readonly=\"saved\" placeholder=\"Currency\" type=\"text\" maxlength=\"1\" />\n" +
    "			\n" +
    "			<div class=\"actions\">\n" +
    "				<input ng-hide=\"saved\" class=\"bigbtn save\" type=\"submit\" value=\"Save\" ng-disabled=\"saving\" />\n" +
    "				<a ng-show=\"saved\" class=\"bigbtn\" href=\"/app/#!/\">Done</a>\n" +
    "			</div>\n" +
    "		</form>\n" +
    "	</div>\n" +
    "	\n" +
    "	<div class=\"controls\">\n" +
    "		<a uservoice-trigger identify=\"uservoiceIdentify\" mode=\"contact\" position=\"top\" class=\"tagbtn\">Feedback</a>\n" +
    "		<a ng-click=\"logout()\" class=\"tagbtn\">Logout</a>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("templates/controllers/auth/auth-forgot.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/controllers/auth/auth-forgot.tpl.html",
    "<div>\n" +
    "	<section class=\"container\">\n" +
    "		<h3><span>Forgot</span></h3>\n" +
    "		\n" +
    "		<div class=\"alert\" ng-class=\"{warning: status >= 200 && status < 300}\">Alright, I just sent you an email. Just click the link in it!</div>\n" +
    "		<div class=\"alert\" ng-class=\"{error: status && !(status >= 200 && status < 300)}\">Sorry, I'm not finding that email in my databanks.</div>\n" +
    "		\n" +
    "		<form ng-hide=\"status >= 200 && status < 300\" autofill-submit=\"forgot()\">\n" +
    "			<div class=\"field\">\n" +
    "				<input autofill ng-model=\"user.email\" placeholder=\"Email\" type=\"email\" />\n" +
    "				<span class=\"taglabel error\">required</span>\n" +
    "			</div>\n" +
    "			\n" +
    "			<div class=\"actions\">\n" +
    "				<a href=\"/app/#!/login\">Nevermind, I remember now!</a>\n" +
    "				<input class=\"bigbtn\" type=\"submit\" value=\"Reset\" ng-disabled=\"loading\" />\n" +
    "			</div>\n" +
    "		</form>\n" +
    "	</section>\n" +
    "</div>\n" +
    "");
}]);

angular.module("templates/controllers/auth/auth-login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/controllers/auth/auth-login.tpl.html",
    "<div>\n" +
    "	<section class=\"container\">\n" +
    "		<h3><span>Login</span></h3>\n" +
    "		\n" +
    "		<div class=\"alert error\" ng-repeat=\"error in errors\">{{error}}</div>\n" +
    "		\n" +
    "		<form autofill-submit=\"login()\" action=\"/savepasswordprompt\" target=\"savepasswordprompt\" method=\"post\">\n" +
    "			<input autofill ng-model=\"user.username\" placeholder=\"Email\" name=\"username\" type=\"email\" />\n" +
    "			<input autofill ng-model=\"user.password\" placeholder=\"Password\" name=\"password\" type=\"password\" />\n" +
    "			<div class=\"actions\">\n" +
    "				<a href=\"/app/#!/forgot\">Forgot Password?</a>\n" +
    "				<a href=\"/app/#!/signup\">Not a member yet?</a>\n" +
    "				<input class=\"bigbtn\" type=\"submit\" value=\"Login\" ng-disabled=\"loading\" />\n" +
    "			</div>\n" +
    "		</form>\n" +
    "		<iframe name=\"savepasswordprompt\"></iframe>\n" +
    "	</section>\n" +
    "</div>\n" +
    "");
}]);

angular.module("templates/controllers/auth/auth-reset.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/controllers/auth/auth-reset.tpl.html",
    "<div>\n" +
    "	<section class=\"container\">\n" +
    "		<h3><span>Reset</span></h3>\n" +
    "		\n" +
    "		<div class=\"alert success\" ng-show=\"saved\">Your new password is set. Try <a href=\"/app/#!/login\">logging in</a> using it!</div>\n" +
    "		<div class=\"alert error\" ng-repeat=\"error in errors\">{{error}}</div>\n" +
    "		\n" +
    "		<form ng-hide=\"saved\" ng-submit=\"reset()\">\n" +
    "			<input ng-model=\"user.password\" placeholder=\"New Password\" name=\"password\" type=\"password\" autocomplete=\"off\" />\n" +
    "			\n" +
    "			<div class=\"actions\">\n" +
    "				<a href=\"/app/#!/login\">Nevermind, I remember now!</a>\n" +
    "				<input class=\"bigbtn\" type=\"submit\" value=\"Save\" ng-disabled=\"loading\" />\n" +
    "			</div>\n" +
    "		</form>\n" +
    "	</section>\n" +
    "</div>\n" +
    "");
}]);

angular.module("templates/controllers/auth/auth-signup.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/controllers/auth/auth-signup.tpl.html",
    "<div>\n" +
    "	<section class=\"container\">\n" +
    "		<h3><span>Sign Up</span></h3>\n" +
    "		\n" +
    "		<div class=\"alert\" ng-class=\"{success: signupCompleted}\">You did it! Now you just need to <a href=\"/app/#!/login\">login</a>.</div>\n" +
    "		<div class=\"alert\" ng-class=\"{error: status == 409}\">That email has already been used. Maybe just <a href=\"/app/#!/login\">try logging in</a>?</div>\n" +
    "		<div class=\"alert error\" ng-repeat=\"error in errors\">{{error}}</div>\n" +
    "		\n" +
    "		<a ng-show=\"signupCompleted\" href=\"/app/#!/login\" class=\"bigbtn full\">Login</a>\n" +
    "		\n" +
    "		<form ng-hide=\"signupCompleted\" autofill-submit=\"signup()\">\n" +
    "			<div class=\"field\">\n" +
    "				<input autofill ng-model=\"user.name\" placeholder=\"Name\" name=\"name\" type=\"text\" />\n" +
    "				<span class=\"taglabel error\">required</span>\n" +
    "			</div>\n" +
    "			<div class=\"field\">\n" +
    "				<input autofill ng-model=\"user.email\" placeholder=\"Email\" name=\"username\" type=\"email\" />\n" +
    "				<span class=\"taglabel error\">required</span>\n" +
    "			</div>\n" +
    "			<div class=\"field\">\n" +
    "				<input autofill ng-model=\"user.password\" placeholder=\"Password\" name=\"password\" type=\"password\" />\n" +
    "				<span class=\"taglabel error\">required</span>\n" +
    "			</div>\n" +
    "			\n" +
    "			<div class=\"field\">\n" +
    "				<div class=\"alert warning\"><input class=\"agree\" ng-model=\"agreements.terms\" id=\"terms\" type=\"checkbox\" /> <label for=\"terms\">I agree to the <a href=\"/app/#!/terms\">Terms of Service</a> and <a href=\"/app/#!/privacy\">Privacy Policy</a> for {{appName}}.</label></div>\n" +
    "			</div>\n" +
    "			\n" +
    "			<div class=\"field\">\n" +
    "				<div class=\"alert warning\"><input class=\"agree\" ng-model=\"agreements.emails\" id=\"emails\" type=\"checkbox\" /> <label for=\"emails\">I agree to receive emails containing news, updates and promotions regarding {{appName}}.</label></div>\n" +
    "			</div>\n" +
    "			\n" +
    "			<input ng-model=\"isRobot\" type=\"text\" style=\"display: none;\">\n" +
    "			\n" +
    "			<div class=\"actions\">\n" +
    "				<a href=\"/\">Learn more?</a>\n" +
    "				<a href=\"/app/#!/login\">Already a member?</a>\n" +
    "				<input class=\"bigbtn\" type=\"submit\" value=\"Sign Up\" ng-disabled=\"loading\" />\n" +
    "			</div>\n" +
    "		</form>\n" +
    "	</section>\n" +
    "</div>\n" +
    "");
}]);

angular.module("templates/controllers/expenses/expenses.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/controllers/expenses/expenses.tpl.html",
    "<h3><span>Expenses</span></h3>\n" +
    "\n" +
    "<timeline type=\"expenses\" year=\"year\"></timeline>\n" +
    "");
}]);

angular.module("templates/controllers/finances/finances.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/controllers/finances/finances.tpl.html",
    "<h3><span>Finances</span></h3>\n" +
    "\n" +
    "<finances-timeline type=\"finances\" year=\"year\"></finances-timeline>\n" +
    "");
}]);

angular.module("templates/controllers/properties/properties.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/controllers/properties/properties.tpl.html",
    "<h3><span>Properties</span></h3>\n" +
    "\n" +
    "<div ng-if=\"!loading\">\n" +
    "	<ul ng-if=\"properties.length\" class=\"properties\">\n" +
    "		<li ng-repeat=\"property in properties\">\n" +
    "			<property property=\"property\" actions=\"true\"></property>\n" +
    "		</li>\n" +
    "	</ul>\n" +
    "	\n" +
    "	<div ng-if=\"!properties.length\" class=\"alert warning\">You don't have any properties added yet. Try <a ng-click=\"toggleCreateProperty()\">creating one</a>.</div>\n" +
    "</div>\n" +
    "\n" +
    "<loading-indicator active=\"loading\"></loading-indicator>\n" +
    "\n" +
    "<a class=\"bigbtn full\" ng-click=\"toggleCreateProperty()\">\n" +
    "	<span ng-if=\"!newProperty\">Add Property</span>\n" +
    "	<span ng-if=\"newProperty\">Cancel</span>\n" +
    "</a>\n" +
    "\n" +
    "<create-property ng-if=\"newProperty\"></create-property>\n" +
    "");
}]);

angular.module("templates/controllers/receipts/receipts.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/controllers/receipts/receipts.tpl.html",
    "<h3><span>Receipts</span></h3>\n" +
    "\n" +
    "<timeline type=\"receipts\" year=\"year\"></timeline>\n" +
    "");
}]);

angular.module("templates/controllers/welcome/welcome-acceptableuse.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/controllers/welcome/welcome-acceptableuse.tpl.html",
    "<article>\n" +
    "	<hgroup>\n" +
    "		<h3>Acceptable Use Policy for RentChek</h3>\n" +
    "		<h5>This Policy was last revised on January 17, 2014.</h5>\n" +
    "	</hgroup>\n" +
    "	\n" +
    "	<p><strong>Unlawful Use:</strong> You may not use the Service for any unlawful purposes or for promotion of illegal activities. You may not post any Content on the Service in violation of any applicable law, including intellectual property laws and right of privacy or publicity laws, or any contractual obligation. International users agree to comply with all local laws regarding online conduct and acceptable content.</p> \n" +
    "	<p><strong>Information Quality:</strong> You may not post Content or use the Service to create an impression that you know is incorrect, misleading, or deceptive. This includes creating false check-ins or otherwise misrepresenting your location.</p>				\n" +
    "	<p><strong>Offensive Content:</strong> You may not post Content that is hateful, abusive, threatening, profane, or otherwise objectionable.</p> \n" +
    "	<p><strong>Commercial Solicitation:</strong> You may not use the Service for any commercial solicitation purposes.</p> \n" +
    "	<p><strong>Impersonation:</strong> You may not impersonate others through the Service or otherwise misrepresent your affiliation with a person or entity in a manner that does or is intended to mislead, confuse, or deceive others.</p>				\n" +
    "	<p><strong>Privacy:</strong> You may not publish or post other people's private or personally identifiable information, such as credit card numbers, street address or Social Security/National Identity numbers, without their express authorization and permission.</p>				\n" +
    "	<p><strong>Spam:</strong> You may not use the Service for the purpose of spamming anyone.</p>\n" +
    "	<p><strong>Malware, Phishing:</strong> You may not publish or link to malicious content intended to damage or disrupt another user's browser or computer or to compromise a user's privacy.</p>						\n" +
    "	<p><strong>Technical Interference:</strong> You may not do any of the following while accessing or using the Service: (i) access, tamper with, or use non-public areas of the Service, RentChek's computer systems, or the technical delivery systems of RentChek's providers; (ii) probe, scan, or test the vulnerability of any system or network or breach or circumvent any security or authentication measures; (iii) access or search or attempt to access or search the Service by any means (automated or otherwise) other than through the currently available, published interfaces that are provided by RentChek (and only pursuant to those terms and conditions), unless you have been specifically allowed to do so in a separate agreement with RentChek (NOTE: crawling the Service is permissible if done in accordance with the provisions of the robots.txt file, however, scraping the Service without the prior consent of RentChek except as permitted by these Terms is expressly prohibited); (iv) forge any TCP/IP packet header or any part of the header information in any email or posting, or in any way use the Service to send altered, deceptive or false source-identifying information; or (v) interfere with, or disrupt, (or attempt to do so), the access of any user, host or network, including, without limitation, sending a virus, overloading, flooding, spamming, mail-bombing the Service, or by scripting the creation of Content in such a manner as to interfere with or create an undue burden on the Service.</p>\n" +
    "</article>\n" +
    "\n" +
    "<div class=\"controls\">\n" +
    "	<a href=\"/app/#!/signup\" class=\"bigbtn\">Sign Up</a>\n" +
    "	<a href=\"/app/#!/login\" class=\"bigbtn\">Login</a>\n" +
    "</div>\n" +
    "");
}]);

angular.module("templates/controllers/welcome/welcome-privacy.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/controllers/welcome/welcome-privacy.tpl.html",
    "<article>\n" +
    "	<hgroup>\n" +
    "		<h3>Privacy Policy for RentChek</h3>\n" +
    "		<h5>This Policy was last revised on January 17, 2014.</h5>\n" +
    "	</hgroup>\n" +
    "	\n" +
    "	<p>\n" +
    "		RentChek, Inc. (\"RentChek,\" \"we,\" or \"us\"), knows that you care how information about you is used and shared. This Privacy Policy explains what information of yours will be collected by RentChek when you use the RentChek Service, how the information will be used, and how you can control the collection, correction and/or deletion of information. We will not use or share your information with anyone except as described in this Privacy Policy. This Privacy Policy does not apply to information we collect by other means (including offline) or from other sources. Capitalized terms that are not defined in this policy are defined in our Terms of Use. We expect that Users will use RentChek for harmless and fun social purposes. Please note, though, that by its nature, your location information is subject to abuse, misuse, and over-monitoring by others including, perhaps, by your friends, family, or acquaintances. Please manage your own mobile and profile privacy preferences on the Service, on an ongoing basis, accordingly.\n" +
    "	</p>\n" +
    "	\n" +
    "	<h4>Information We Collect</h4>\n" +
    "	<p>\n" +
    "		<strong>User-Provided Information.</strong> You provide us information about yourself, such as your name, e-mail address, etc., if you register for a Member account with the Service. When using the Service, you may also provide certain other personal information and content, such as locations and activities, which will be publicly displayed to other Users and on third-party sites and services in accordance with your privacy and opt-in settings.\n" +
    "	</p>\n" +
    "	\n" +
    "	<p>\n" +
    "		<strong>Cookies Information.</strong> When you visit RentChek.com, we may send one or more cookies - a small text file containing a string of alphanumeric characters - to your computer that uniquely identifies your browser and lets RentChek help you log in faster and enhance your navigation through the site. A cookie may also convey anonymous information about how you browse the Service to us. A cookie does not collect personal information about you. RentChek uses both session cookies and persistent cookies. A persistent cookie remains on your hard drive after you close your browser. Persistent cookies may be used by your browser on subsequent visits to the site. Persistent cookies can be removed by following your web browser's directions. A session cookie is temporary and disappears after you close your browser. You can reset your web browser to refuse all cookies or to indicate when a cookie is being sent. However, some features of the Service may not function properly if the ability to accept cookies is disabled.\n" +
    "	</p>\n" +
    "	\n" +
    "	<p>\n" +
    "		<strong>Log File Information.</strong> Log file information is automatically reported by your browser each time you access a web page. When you register with or view our site, our servers automatically record certain information that your web browser sends whenever you visit any website. These server logs may include information such as your web request, Internet Protocol (\"IP\") address, browser type, referring / exit pages and URLs, number of clicks, domain names, landing pages, pages viewed, and other such information.\n" +
    "	</p>\n" +
    "	\n" +
    "	<p>\n" +
    "		<strong>Clear Gifs Information.</strong> When you use the Service, we may employ clear gifs (also known as web beacons) which are used to track the online usage patterns of our users anonymously. No personally identifiable information from your RentChek account is collected using these clear gifs. In addition, we may also use clear gifs in HTML-based emails sent to our users to track which emails are opened by recipients. The information is used to enable more accurate reporting, improve the effectiveness of our marketing, and make RentChek better for our users.\n" +
    "	</p>\n" +
    "	\n" +
    "	<h4>How We Use Your Information</h4>\n" +
    "	<p>\n" +
    "		We use the personal information you submit to operate, maintain, and provide to you the features and functionality of the Service.\n" +
    "	</p>\n" +
    "	\n" +
    "	<p>\n" +
    "		Any personal information or content that you voluntarily disclose for posting to the Service (including your location information and User Content) becomes available to the public. RentChek is not responsible for the personally identifiable, profile, or location information that you choose to disclose publicly on the Service. If you remove information that you posted to the Service, copies may remain viewable in cached and archived pages of the Service, or if other Users have copied or saved that information.\n" +
    "	</p>\n" +
    "	\n" +
    "	<p>\n" +
    "		By providing RentChek your email address, you consent to our using the email address to send you Service-related notices, including any notices required by law, in lieu of communication by postal mail. We may also use your email address or mobile phone number to send you other messages, such as newsletters, changes to features of the Service, or special offers. If you do not want to receive such messages, you may opt out by contacting us. Opting out may prevent you from receiving messages regarding updates, improvements, or offers. You may not opt out of Service-related e-mails. If you correspond with us by email, we may retain the content of your email messages and our responses.\n" +
    "	</p>\n" +
    "	\n" +
    "	<p>\n" +
    "		RentChek may use certain information about you and/or your User Content without identifying you as an individual to third parties. We do this for purposes such as analyzing how the Service is used, diagnosing service or technical problems, maintaining security, and personalizing content.\n" +
    "	</p>\n" +
    "	\n" +
    "	<p>\n" +
    "		RentChek reserves the right, but has no obligation, to monitor the User Content you post on the site. We reserve the right to remove any such information or material for any reason or no reason, including without limitation if in our sole opinion such information or material violates, or may violate, any applicable law or our Terms of Use Agreement, or to protect or defend our rights or property or those of any third party. RentChek also reserves the right to remove information upon the request of any third party.\n" +
    "	</p>\n" +
    "	\n" +
    "	<p>\n" +
    "		We use cookies, clear gifs, and log file information to: (a) remember information so that you will not have to re-enter it during your visit or the next time you visit the site; (b) provide custom, personalized content and information; (c) monitor the effectiveness of our Service; (d) monitor aggregate metrics such as total number of visitors and traffic; (e) diagnose or fix technology problems reported by our users or engineers that are associated with certain IP addresses; and (f) help you efficiently access your information after you sign in.\n" +
    "	</p>\n" +
    "	\n" +
    "	<h4>How We Share Your Information</h4>\n" +
    "	<p>\n" +
    "		<strong>Personally Identifiable Information.</strong> RentChek may share your personally identifiable information with third parties solely for the purpose of providing services to you. If we do this, such third parties' use of your information will be bound by this Privacy Policy. We may store personal information in locations outside the direct control of RentChek (for instance, on servers or databases co-located with hosting providers).\n" +
    "	</p>\n" +
    "	\n" +
    "	<p>\n" +
    "		RentChek does not share your personally identifiable information or personally-identifiable location information with other, third-party companies for their commercial or marketing use without your express consent or unless you have opted-in to be part of a specific program or feature. We cannot control third parties' use of your information. If you do not want your information to be collected by or shared with such a third party, you can choose not to participate in such programs or features. As we develop our business, we may buy or sell assets or business offerings. Customer, email, and visitor information is generally one of the transferred business assets in these types of transactions. We may also transfer such information in the course of corporate divestitures, mergers, or dissolution.\n" +
    "	</p>\n" +
    "	\n" +
    "	<p>\n" +
    "		Except as otherwise described in this Privacy Policy, RentChek will not disclose personal information to any third party unless required to do so by law or subpoena or if we believe that such action is necessary to (a) conform to the law, comply with legal process served on us or our affiliates, or investigate, prevent, or take action regarding suspected or actual illegal activities; (b) to enforce our Terms of Use, take precautions against liability, to investigate and defend ourselves against any third-party claims or allegations, to assist government enforcement agencies, or to protect the security or integrity of our site; and (c) to exercise or protect the rights, property, or personal safety of RentChek, our Users or others.\n" +
    "	</p>\n" +
    "	\n" +
    "	<p>\n" +
    "		<strong>Non-Personally Identifiable Information.</strong> We may share non-personally identifiable information (such as anonymous usage data, referring/exit pages and URLs, platform types, number of clicks, etc.) with interested third parties to help them understand the usage patterns for certain RentChek services.\n" +
    "	</p>\n" +
    "	\n" +
    "	<p>\n" +
    "		RentChek may allow third-party ad servers or ad networks to serve advertisements on the RentChek site. These third-party ad servers or ad networks use technology to send, directly to your browser, the advertisements and links that appear on RentChek. They automatically receive your IP address when this happens. They may also use other technologies (such as cookies, JavaScript, or web beacons) to measure the effectiveness of their advertisements and to personalize the advertising content. RentChek does not provide any personally identifiable information to these third-party ad servers or ad networks without your consent. However, please note that if an advertiser asks RentChek to show an advertisement to a certain audience and you respond to that advertisement, the advertiser or ad-server may conclude that you fit the description of the audience they are trying to reach. The RentChek Privacy Policy does not apply to, and we cannot control the activities of, third-party advertisers. Please consult the respective privacy policies of such advertisers for more information.\n" +
    "	</p>\n" +
    "	\n" +
    "	<h4>How We Protect Your Information</h4>\n" +
    "	\n" +
    "	<p>\n" +
    "		RentChek uses commercially reasonable physical, managerial, and technical safeguards to preserve the integrity and security of your personal information. We cannot, however, ensure or warrant the security of any information you transmit to RentChek and you do so at your own risk. Once we receive your transmission of information, RentChek makes commercially reasonable efforts to ensure the security of our systems. However, please note that this is not a guarantee that such information may not be accessed, disclosed, altered, or destroyed by breach of any of our physical, technical, or managerial safeguards.\n" +
    "	</p>\n" +
    "	\n" +
    "	<p>\n" +
    "		To protect your privacy and security, we take reasonable steps (such as requesting a unique password) to verify your identity before granting you access to your account. You are responsible for maintaining the secrecy of your unique password and account information, and for controlling access to your email communications from RentChek, at all times.\n" +
    "	</p>\n" +
    "	\n" +
    "	<h4>Compromise of Personal Information</h4>\n" +
    "	<p>\n" +
    "		In the event that personal information is compromised as a result of a breach of security, RentChek will promptly notify those persons whose personal information has been compromised, in accordance with the notification procedures set forth in this Privacy Policy, or as otherwise required by applicable law.\n" +
    "	</p>\n" +
    "	\n" +
    "	<h4>Your Choices About Your Information</h4>\n" +
    "	<p>\n" +
    "		You may, of course, decline to submit personally identifiable information through the Service, in which case RentChek may not be able to provide certain services to you. You may update or correct your account information [and email preferences] at any time by logging in to your account. You can review and correct the information about you that RentChek keeps on file by contacting us directly at terms [at] RentChek.com.\n" +
    "	</p>\n" +
    "	\n" +
    "	<h4>Children's Privacy</h4>\n" +
    "	<p>\n" +
    "		Protecting the privacy of young children is especially important. For that reason, RentChek does not knowingly collect or solicit personal information from anyone under the age of 13 or knowingly allow such persons to register as Members. If you are under 13, please do not send any information about yourself to us, including your name, address, telephone number, or email address. No one under age 13 is allowed to provide any personal information to or on RentChek. In the event that we learn that we have collected personal information from a child under age 13 without verification of parental consent, we will delete that information as quickly as possible. If you believe that we might have any information from or about a child under 13, please contact us at terms [at] RentChek.com.\n" +
    "	</p>\n" +
    "	\n" +
    "	<h4>Links to Other Web Sites</h4>\n" +
    "	<p>\n" +
    "		We are not responsible for the practices employed by websites linked to or from our website, nor the information or content contained therein. Please remember that when you use a link to go from our website to another website, our Privacy Policy is no longer in effect. Your browsing and interaction on any other website, including those that have a link on our website, is subject to that website's own rules and policies. Please read over those rules and policies before proceeding.\n" +
    "	</p>\n" +
    "	\n" +
    "	<h4>Notification Procedures</h4>\n" +
    "	<p>\n" +
    "		It is our policy to provide notifications, whether such notifications are required by law or are for marketing or other business related purposes, to you via email notice, written or hard copy notice, or through conspicuous posting of such notice on our website, as determined by RentChek in its sole discretion. We reserve the right to determine the form and means of providing notifications to you, provided that you may opt out of certain means of notification as described in this Privacy Policy.\n" +
    "	</p>\n" +
    "	\n" +
    "	<h4>Changes to Our Privacy Policy</h4>\n" +
    "	<p>\n" +
    "		If we change our privacy policies and procedures, we will post those changes on our website to keep you aware of what information we collect, how we use it and under what circumstances we may disclose it. Changes to this Privacy Policy are effective when they are posted on this page.\n" +
    "	</p>\n" +
    "	\n" +
    "	<p>\n" +
    "		If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this website, please contact us at <a href=\"mailto:chesley@rentchek.com\">chesley@rentchek.com</a>.\n" +
    "	</p>\n" +
    "</article>\n" +
    "\n" +
    "<div class=\"controls\">\n" +
    "	<a href=\"/app/#!/signup\" class=\"bigbtn\">Sign Up</a>\n" +
    "	<a href=\"/app/#!/login\" class=\"bigbtn\">Login</a>\n" +
    "</div>\n" +
    "");
}]);

angular.module("templates/controllers/welcome/welcome-terms.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/controllers/welcome/welcome-terms.tpl.html",
    "<article>\n" +
    "	<hgroup>\n" +
    "		<h3>Terms of Service for RentChek</h3>\n" +
    "		<h5>This Agreement was last revised on January 17, 2014.</h5>\n" +
    "	</hgroup>\n" +
    "	\n" +
    "	<p>\n" +
    "		Welcome to RentChek, a website and online service of RentChek, Ltd. (\"RentChek,\" \"we,\" or \"us\"). This page explains the terms by which you may use the RentChek web site, web widgets, feeds, mobile device software applications (the \"RentChek Software\"), application program interfaces, applications for third-party web sites and services, and any other web or mobile services or applications owned, controlled, or offered by RentChek in association with this site (collectively the \"Service\"). By accessing or using the Service, you signify that you have read, understood, and agree to be bound by this Terms of Use Agreement (\"Agreement\"), whether or not you are a registered user of our Service.\n" +
    "	</p>\n" +
    "	\n" +
    "	<p>\n" +
    "		We reserve the right to amend this Agreement at any time by notifying you as provided in this Agreement, provided that no notice shall be required for non-substantive changes to the Agreement. If we substantively amend this Agreement, we will give you at least seven (7) days notice before the changes take effect, during which period of time you may reject the changes by terminating your account. Your continued use of the Service after any such change constitutes your acceptance of the new Terms of Use Agreement. If you do not agree to any of these terms or any future Terms of Use Agreement, do not use or access (or continue to access) the Service. This Agreement applies to all visitors, users, and others who access the Service (\"Users\").\n" +
    "	</p>\n" +
    "	\n" +
    "	<h4>1) Use of Our Service</h4>\n" +
    "	<p>\n" +
    "		RentChek provides a new way manage all your rental properties. You do not have to register in order to visit RentChek. To access certain features of the Service, though, such as creating properties, you will need to register with RentChek and create a \"Member\" account. Your Member account gives you access to the services and functionality that we may establish and maintain from time to time and in our sole discretion.\n" +
    "	</p>\n" +
    "	\n" +
    "	<p>\n" +
    "		This Service is intended solely for Users who are thirteen (13) years of age or older, and any registration, use or access to the Service by anyone under 13 is strictly prohibited and in violation of this Agreement. If you are under 18 years of age you may use the Service only if you either are an emancipated minor or have the consent of your parent or legal guardian, and are fully able and competent to enter into this Agreement and to abide by and comply with its terms.\n" +
    "	</p>\n" +
    "	\n" +
    "	<p>\n" +
    "		You may never use another Member's account without permission. When creating your account, you must provide accurate and complete information. You are solely responsible for the activity that occurs on your account, and you must keep your account password secure. You must notify RentChek immediately of any breach of security or unauthorized use of your account. Although RentChek will not be liable for your losses caused by any unauthorized use of your account, you shall be liable for the losses of RentChek or others due to such unauthorized use.\n" +
    "	</p>\n" +
    "	\n" +
    "	<p>\n" +
    "		You may control your Member profile and how you interact with the Service by changing your settings on the Service. By providing RentChek your email address you consent to our using the email address to send you Service-related notices, including any notices required by law, in lieu of communication by postal mail. We may also use your email address or mobile phone telephone number to send you other messages, including changes to features of the Service and special offers. If you do not want to receive such messages, you may opt out or change your preferences by changing your settings. Opting out may prevent you from receiving messages regarding updates, improvements, or offers.\n" +
    "	</p>\n" +
    "	\n" +
    "	<p>\n" +
    "		All aspects of the Service are subject to change or elimination at RentChek's sole discretion. RentChek reserves the right to interrupt the Service an/or to permanently or temporarily terminate, suspend, or otherwise refuse to permit your access to the Service with or without prior notice for any reason or no reason. You agree that RentChek will not be liable to you for any interruption of the Service or your account.\n" +
    "	</p>\n" +
    "	\n" +
    "	<p>\n" +
    "		You are solely responsible for your interactions with other RentChek Users. We reserve the right, but have no obligation, to monitor disputes between you and other Users. RentChek shall have no liability for your interactions with other Users, or for any User's action or inaction.\n" +
    "	</p>\n" +
    "	\n" +
    "	<h4>2) User Content</h4>\n" +
    "	\n" +
    "	<p>\n" +
    "		Some areas of the Service may allow Users to post records, feedback, comments, questions, and other information (collectively \"User Content\"). You are solely responsible for your User Content that you upload, publish, display, link to or otherwise make available (hereinafter, \"post\") on the Service, and you agree that we are only acting as a passive conduit for your online distribution and publication of your User Content. You agree to comply with the <a href=\"/app/#!/acceptableuse\">Acceptable Use Policy</a> in posting User Content.\n" +
    "	</p>\n" +
    "	\n" +
    "	<p>\n" +
    "		RentChek takes no responsibility and assumes no liability for any User Content that you or any other User or third party posts or sends over the Service. You understand and agree that any loss or damage that occurs as a result of the use of any User Content that you make available or access through your use of the Service, including without limitation your posting of or viewing of records, is solely your responsibility. RentChek is not responsible for any public display or misuse of your User Content. You may be exposed to User Content that is inaccurate or objectionable.\n" +
    "	</p>\n" +
    "	\n" +
    "	<h4>3) License Grant</h4>\n" +
    "	\n" +
    "	<p>\n" +
    "		By posting any User Content on the Service, you expressly grant, and you represent and warrant that you have a right to grant, to RentChek a royalty-free, sublicensable, transferable, perpetual, irrevocable, non-exclusive, worldwide license to use, reproduce, modify, publish, list information regarding, edit, translate, distribute, publicly perform, publicly display, and make derivative works of all such User Content and your name, voice, and/or likeness as contained in your User Content, in whole or in part, and in any form, media or technology, whether now known or hereafter developed, for use in connection with the Service.\n" +
    "	</p>\n" +
    "	\n" +
    "	<h4>4) End User Licenses</h4>\n" +
    "	<p>\n" +
    "		<strong>RentChek Service.</strong> Subject to the terms and conditions of this Agreement, you are hereby granted a non-exclusive, limited, personal license to use the Service. RentChek reserves all rights not expressly granted herein in the Service and the RentChek Content (as defined below). RentChek may terminate this license at any time for any reason or no reason.\n" +
    "	</p>\n" +
    "	\n" +
    "	<h4>5) Our Proprietary Rights</h4>\n" +
    "	<p>\n" +
    "		Except for your User Content, all right, title, and interest in and to the Service and all materials therein or transferred thereby, including, without limitation, properties, receipts, software, images, text, graphics, illustrations, logos, patents, trademarks, service marks, copyrights, photographs, audio, videos, music, and User Content (the \"RentChek Content\") are and will remain the exclusive property of RentChek and its licensors. You agree not to sell, license, rent, modify, distribute, copy, reproduce, transmit, publicly display, publicly perform, publish, adapt, edit or create derivative works from any materials or content accessible on the Service. Use of the RentChek Content or materials on the Service for any purpose not expressly permitted by this Agreement is strictly prohibited.\n" +
    "	</p>\n" +
    "	\n" +
    "	<p>\n" +
    "		Any feedback, comments, or suggestions you may provide regarding RentChek or the Services is entirely voluntary and we will be free to use such feedback, comments or suggestions as we see fit and without any obligation to you.\n" +
    "	</p>\n" +
    "	\n" +
    "	<h4>6) Privacy</h4>\n" +
    "	<p>\n" +
    "		We care about the privacy of our Users. <a href=\"/app/#!/privacy\">Click here to view our Privacy Policy</a>. By using the Service, you are consenting to have your personal data transferred to and processed in the United States.\n" +
    "	</p>\n" +
    "	\n" +
    "	<h4>7) Security</h4>\n" +
    "	<p>\n" +
    "		We have implemented commercially reasonable technical and organizational measures designed to implement your privacy settings and secure your personal information from accidental loss and from unauthorized access, use, alteration or disclosure. However, we cannot guarantee that unauthorized third parties will never be able to defeat those measures or use your personal information for improper purposes. You acknowledge that you provide your personal information at your own risk.\n" +
    "	</p>\n" +
    "	\n" +
    "	<h4>8) Additional Representations and Warranties</h4>\n" +
    "	<p>\n" +
    "		In connection with your User Content, you affirm, represent and warrant, in addition to the other representations and warranties in this Agreement, that: (a) you are at least 18 years of age; (b) you have the written consent of each and every identifiable natural person in the User Content to use such person's name or likeness in the manner contemplated by the Service and this Agreement, and each such person has released you from any liability that may arise in relation to such use; (c) your User Content and RentChek's use thereof as contemplated by this Agreement and the Service will not infringe any rights of any third party, including but not limited to any Intellectual Property Rights, privacy rights and rights of publicity; and (d) RentChek may exercise the rights to your User Content granted under this Agreement without liability for payment of any guild fees, residuals, payments, fees, or royalties payable under any collective bargaining agreement or otherwise.\n" +
    "	</p>\n" +
    "	\n" +
    "	<h4>9) Third-Party Links</h4>\n" +
    "	<p>\n" +
    "		RentChek may contain links to third-party websites, advertisers, or services that are not owned or controlled by RentChek. RentChek has no control over, and assumes no responsibility or liability for, the content, privacy policies, or practices of any third party websites or services. If you access a third party website from RentChek, you do so at your own risk, and you understand that this Agreement and RentChek's Privacy Policy do not apply to your use of such sites. You expressly relieve RentChek from any and all liability arising from your use of any third-party website or services or third party owned content.\n" +
    "	</p>\n" +
    "	\n" +
    "	<p>\n" +
    "		We encourage you to be aware of when you leave the Service, and to read the terms and conditions and privacy policy of any third-party website or service that you visit.\n" +
    "	</p>\n" +
    "	\n" +
    "	<h4>10) Indemnity</h4>\n" +
    "	<p>\n" +
    "		You agree to defend, indemnify and hold harmless RentChek and its subsidiaries, agents, managers, partners (including, without limitation, its wireless carrier partners), and other affiliated companies, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees) arising from: (i) your use of and access to the Service, including any data or content transmitted or received by you; (ii) your violation of any term of this Agreement, including without limitation your breach of any of the representations and warranties above; (iii) your violation of any third-party right, including without limitation any right of privacy, publicity rights or Intellectual Property Rights; (iv) your violation of any law, rule or regulation of the United States or any other country; (v) any claim or damages that arise as a result of any of your User Content or any that is submitted via your account; (vi) any other party's access and use of the Service with your unique username, password or other appropriate security code; or (vii) your use the Service to meet another User in-person or to locate and/or visit any offline place or event.\n" +
    "	</p>\n" +
    "	\n" +
    "	<h4>11) No Warranty</h4>\n" +
    "	<p>\n" +
    "		THE SERVICE IS PROVIDED ON AN \"AS IS\" AND \"AS AVAILABLE\" BASIS. WITHOUT LIMITING THE FOREGOING, RENTCHEK, ITS PARTNERS AND LICENSORS DISCLAIM ANY WARRANTIES, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE CONTENT IS ACCURATE, RELIABLE OR CORRECT; THAT THE SERVICE WILL MEET YOUR REQUIREMENTS; THAT THE SERVICE WILL BE AVAILABLE AT ANY PARTICULAR TIME OR LOCATION, UNINTERRUPTED OR SECURE; THAT ANY DEFECTS OR ERRORS WILL BE CORRECTED; OR THAT THE SERVICE IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. ANY CONTENT DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE USE OF THE SERVICE IS DOWNLOADED AT YOUR OWN RISK AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR LOSS OF DATA THAT RESULTS FROM SUCH DOWNLOAD.\n" +
    "	</p>\n" +
    "	\n" +
    "	<h4>12) Limitation of Liability</h4>\n" +
    "	<p>\n" +
    "		TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL RENTCHEK, ITS AFFILIATES, DIRECTORS, EMPLOYEES OR ITS LICENSORS OR PARTNERS BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES, THAT RESULT FROM (A) THE USE, DISCLOSURE, DISPLAY, OR MAINTENANCE OF YOUR LOCATION INFORMATION; (B) YOUR USE OR INABILITY TO USE THE SERVICE; (C) THE SERVICE GENERALLY OR THE SOFTWARE OR SYSTEMS THAT MAKE THE RENTCHEK SERVICES AVAILABLE; OR (D) ANY OTHER INTERACTIONS WITH RENTCHEK OR ANY OTHER USER OF THE RENTCHEK SERVICES, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE) OR ANY OTHER LEGAL THEORY, WHETHER OR NOT RENTCHEK HAS BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, AND EVEN IF A REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE.\n" +
    "	</p>\n" +
    "	\n" +
    "	<p>\n" +
    "		Some jurisdictions do not allow the exclusion of certain warranties or the exclusion or limitation of liability for consequential or incidental damages, so the limitations above may not apply to you.\n" +
    "	</p>\n" +
    "	\n" +
    "	<p>\n" +
    "		The Service is controlled and operated from its facilities in Canada. RentChek makes no representations that the Service is appropriate or available for use in other locations. Those who access or use the Service from other jurisdictions do so at their own volition and are entirely responsible for compliance with all applicable U.S. and local laws and regulations, including but not limited to export and import regulations. You represent and warrant that (i) you are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a \"terrorist supporting\" country; and (ii) you are not listed on any U.S. Government list of prohibited or restricted parties. Unless otherwise explicitly stated, all materials found on the Service are solely directed to individuals, companies, or other entities located in Canada.\n" +
    "	</p>\n" +
    "	\n" +
    "	<h4>13) Assignment</h4>\n" +
    "	<p>\n" +
    "		This Agreement, and any rights and licenses granted hereunder, may not be transferred or assigned by you, but may be assigned by RentChek without restriction.\n" +
    "	</p>\n" +
    "	\n" +
    "	<h4>14) General</h4>\n" +
    "	<p>\n" +
    "		<strong>Notification Procedures.</strong> RENTCHEK may provide notifications, whether such notifications are required by law or are for marketing or other business related purposes, to you via email notice, written or hard copy notice, or through conspicuous posting of such notice on our website, as determined by RentChek in our sole discretion. RentChek reserves the right to determine the form and means of providing notifications to our Users, provided that you may opt out of certain means of notification as described in this Agreement.\n" +
    "	</p>\n" +
    "	\n" +
    "	<p>\n" +
    "		<strong>Entire Agreement/Severability.</strong> This Agreement, together with any amendments and other legal terms referenced in the Agreement, shall constitute the entire agreement between you and RentChek concerning the Service. If any provision of this Agreement is deemed invalid by a court of competent jurisdiction, the invalidity of such provision shall not affect the validity of the remaining provisions of this Agreement, which shall remain in full force and effect.\n" +
    "	</p>\n" +
    "	\n" +
    "	<p>\n" +
    "		<strong>No Waiver.</strong> No waiver of any term of this Agreement shall be deemed a further or continuing waiver of such term or any other term, and RentChek's failure to assert any right or provision under this Agreement shall not constitute a waiver of such right or provision.\n" +
    "	</p>\n" +
    "	\n" +
    "	<p>\n" +
    "		<strong>Survival.</strong> You continue to be bound by this Agreement after termination of your account.\n" +
    "	</p>\n" +
    "	\n" +
    "	<p>\n" +
    "		Please contact us at <a href=\"mailto:chesley@rentchek.com\">chesley@rentchek.com</a> with any questions regarding this Agreement.\n" +
    "	</p>\n" +
    "</article>\n" +
    "\n" +
    "<div class=\"controls\">\n" +
    "	<a href=\"/app/#!/signup\" class=\"bigbtn\">Sign Up</a>\n" +
    "	<a href=\"/app/#!/login\" class=\"bigbtn\">Login</a>\n" +
    "</div>\n" +
    "");
}]);

angular.module("templates/directives/expense/expense-directive.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/directives/expense/expense-directive.tpl.html",
    "<form ng-submit=\"save(property)\">\n" +
    "	<div class=\"alert error\" ng-repeat=\"error in errors\">{{error}}</div>\n" +
    "\n" +
    "	<expense-type type=\"expense.type\"></expense-type>\n" +
    "\n" +
    "	<div class=\"field\">\n" +
    "		<input ng-model=\"expense.description\" placeholder=\"Description\" type=\"text\">\n" +
    "		<span class=\"taglabel error\">required</span>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"field\">\n" +
    "		<input ng-model=\"expense.amount\" placeholder=\"Amount\" type=\"number\" step=\"any\">\n" +
    "		<span class=\"taglabel error\">required</span>\n" +
    "	</div>\n" +
    "\n" +
    "	<div ng-if=\"!expense.date\" class=\"field\">\n" +
    "		<input date=\"expense.date\" placeholder=\"Date\" type=\"text\" pikaday=\"datePickerConfig\" readonly>\n" +
    "		<span class=\"taglabel error\">required</span>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"field\">\n" +
    "		<input ng-model=\"expense.notes\" placeholder=\"Notes\" type=\"text\">\n" +
    "		<span class=\"taglabel warning\">optional</span>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"actions\">\n" +
    "		<input ng-if=\"expense._id\" class=\"bigbtn delete\" ng-click=\"delete()\" type=\"button\" value=\"Delete\" ng-disabled=\"loading\">\n" +
    "		<input class=\"bigbtn save\" type=\"submit\" value=\"Save\" ng-disabled=\"loading\">\n" +
    "	</div>\n" +
    "</form>\n" +
    "");
}]);

angular.module("templates/directives/expense/expense-list-directive.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/directives/expense/expense-list-directive.tpl.html",
    "<div>\n" +
    "	<div class=\"transaction\" ng-repeat=\"expense in expenses\">\n" +
    "		<div>\n" +
    "			<div ng-if=\"!details[expense._id]\">\n" +
    "				<span positive-negative=\"-expense.amount\">{{-expense.amount | shortCurrency}}</span> {{expense.type}} for <a ng-click=\"toggleDetails(expense)\" class=\"description\">{{expense.description}}</a>\n" +
    "			</div>\n" +
    "			<div class=\"transaction-details\" ng-if=\"details[expense._id]\">\n" +
    "				<span positive-negative=\"-expense.amount\">{{-expense.amount | shortCurrency}}</span> {{expense.type}} for <a ng-click=\"toggleDetails(expense)\" class=\"description\">{{expense.description}}</a>\n" +
    "				<div>Added on {{expense.created | moment:'MMM D, YYYY'}}</div>\n" +
    "				<blockquote ng-if=\"expense.notes\">{{expense.notes}}</blockquote>\n" +
    "				<div class=\"actions\">\n" +
    "					<a ng-if=\"!edit[expense._id]\" ng-click=\"toggleEdit(expense)\" class=\"tagbtn\">Edit</a>\n" +
    "					<a ng-if=\"!edit[expense._id]\" ng-click=\"toggleDetails(expense)\" class=\"tagbtn\">Close</a>\n" +
    "					<a ng-if=\"edit[expense._id]\" ng-click=\"cancelEdit(expense)\" class=\"tagbtn\">Cancel</a>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<expense ng-if=\"edit[expense._id]\" expense=\"expense\"></expense>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("templates/directives/expense/expense-month-directive.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/directives/expense/expense-month-directive.tpl.html",
    "<div>\n" +
    "	<div class=\"flex-top\">\n" +
    "		<div class=\"begin\">\n" +
    "			<div class=\"month\">\n" +
    "				<div class=\"long\">{{payment.date | moment:'MMMM YYYY'}}</div>\n" +
    "				<div class=\"short\">{{payment.date | moment:'MMM YYYY'}}</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"end\">\n" +
    "			<div class=\"due\" ng-if=\"!propertiesInPayment.length\">\n" +
    "				<span class=\"taglabel warning\">no properties</span>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<ul class=\"properties\">\n" +
    "		<li ng-repeat=\"property in propertiesInPayment\">\n" +
    "			<div class=\"flex-top\">\n" +
    "				<div class=\"begin\">\n" +
    "					<div class=\"map map-mini\">\n" +
    "						<property-map property=\"property\" size=\"192\"></property-map>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"middle\">\n" +
    "					<div class=\"title\">\n" +
    "						<span class=\"label\">{{property.label}}</span>\n" +
    "						<span class=\"address\">{{property.address}}</span>\n" +
    "					</div>\n" +
    "					<div class=\"details\">\n" +
    "						<expense-list property=\"property\" payment=\"propertyPayment[property._id]\"></expense-list>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"end\">\n" +
    "					<div class=\"actions\">\n" +
    "						<a class=\"tagbtn\" ng-if=\"!newExpenses[property._id]\" ng-click=\"toggleExpense(property)\">Expense</a>\n" +
    "						<a class=\"tagbtn\" ng-if=\"newExpenses[property._id]\" ng-click=\"toggleExpense(property)\">Cancel</a>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "\n" +
    "			<expense ng-if=\"newExpenses[property._id]\" property=\"property\" date=\"payment.date\"></expense>\n" +
    "		</li>\n" +
    "	</ul>\n" +
    "</div>\n" +
    "");
}]);

angular.module("templates/directives/expense/expense-type-directive.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/directives/expense/expense-type-directive.tpl.html",
    "<div>\n" +
    "	<div class=\"select-option\">\n" +
    "		<loading-indicator active=\"loading\"></loading-indicator>\n" +
    "		\n" +
    "		<div class=\"alert error\" ng-repeat=\"error in errors\">{{error}}</div>\n" +
    "		\n" +
    "		<div class=\"select-options\">\n" +
    "			<div ng-repeat=\"expenseType in expenseTypes\" ng-click=\"setType(expenseType)\" ng-class=\"{selected: type == expenseType}\">\n" +
    "				<div class=\"title\">{{expenseType}}</div>\n" +
    "				<i class=\"icon flaticon-correct7\"></i>\n" +
    "			</div>\n" +
    "			<div ng-if=\"type && expenseTypes.indexOf(type) < 0\" ng-class=\"{selected: type && expenseTypes.indexOf(type) < 0}\">\n" +
    "				<div class=\"title\">{{type}}</div>\n" +
    "				<i class=\"icon flaticon-correct7\"></i>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	\n" +
    "	<div class=\"field\">\n" +
    "		<input type=\"text\" name=\"name\" placeholder=\"Category\" ng-model=\"type\">\n" +
    "		<span class=\"taglabel error\">required</span>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("templates/directives/finances/finances-timeline-directive.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/directives/finances/finances-timeline-directive.tpl.html",
    "<div class=\"timeline\">\n" +
    "	<a class=\"next-year bigbtn full\" ng-href=\"/app/#!/finances/{{nextYear}}\">\n" +
    "		<span class=\"flaticon-collapse3\"></span>\n" +
    "		<span class=\"year\">{{nextYear}}</span>\n" +
    "	</a>\n" +
    "	\n" +
    "	<finances-year-slider year=\"year\"></finances-year-slider>\n" +
    "	\n" +
    "	<finances-year-charts year=\"year\"></finances-year-charts>\n" +
    "	\n" +
    "	<a ng-if=\"prevYear > minYear\" class=\"prev-year bigbtn full\" ng-href=\"/app/#!/finances/{{prevYear}}\">\n" +
    "		<span class=\"year\">{{prevYear}}</span>\n" +
    "		<span class=\"flaticon-expand22\"></span>\n" +
    "	</a>\n" +
    "</div>\n" +
    "");
}]);

angular.module("templates/directives/finances/finances-year-charts-directive.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/directives/finances/finances-year-charts-directive.tpl.html",
    "<div>\n" +
    "	<loading-indicator active=\"loading\"></loading-indicator>\n" +
    "	\n" +
    "	<div class=\"alert error\" ng-repeat=\"error in errors\">{{error}}</div>\n" +
    "	\n" +
    "	<div ng-if=\"!loading && properties.length && !errors.length && (expenses.length || payments.length)\">\n" +
    "		<canvas class=\"chart chart-line\" data=\"line.data\" labels=\"line.months\" legend=\"true\" series=\"propertyLabels\" options=\"line.options\"></canvas>\n" +
    "		<canvas class=\"chart chart-doughnut\" data=\"pie.data\" labels=\"propertyLabels\"></canvas>\n" +
    "	</div>\n" +
    "	\n" +
    "	<div ng-if=\"!loading && properties.length && !expenses.length && !payments.length\" class=\"alert warning\">\n" +
    "		I would show you some pretty graphs here, but you haven't recorded any receipts or expenses for {{year}} yet.\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("templates/directives/finances/finances-year-directive.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/directives/finances/finances-year-directive.tpl.html",
    "<div>\n" +
    "	<loading-indicator active=\"loading\"></loading-indicator>\n" +
    "\n" +
    "	<div ng-if=\"!loading\">\n" +
    "		<ul class=\"properties\">\n" +
    "			<li>\n" +
    "				<property property=\"property\" actions=\"false\"></property>\n" +
    "			</li>\n" +
    "		</ul>\n" +
    "\n" +
    "		<ul class=\"finances\">\n" +
    "			<li>\n" +
    "				<div class=\"title\">Rent</div>\n" +
    "				<div class=\"income\">\n" +
    "					<span positive-negative=\"income\">{{income | shortCurrency}}</span>\n" +
    "				</div>\n" +
    "			</li>\n" +
    "			<li ng-repeat=\"(expenseType, expense) in expenses\">\n" +
    "				<div class=\"title\">{{expenseType}}</div>\n" +
    "				<div class=\"income\">\n" +
    "					<span positive-negative=\"-expense.total\">{{-expense.total | shortCurrency}}</span>\n" +
    "				</div>\n" +
    "			</li>\n" +
    "			<li>\n" +
    "				<div class=\"title\">Net</div>\n" +
    "				<div class=\"income\">\n" +
    "					<span positive-negative=\"net\">{{net | shortCurrency}}</span>\n" +
    "				</div>\n" +
    "			</li>\n" +
    "		</ul>\n" +
    "\n" +
    "		<finances-year-export property=\"property\" year=\"year\"></finances-year-export>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("templates/directives/finances/finances-year-export-directive.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/directives/finances/finances-year-export-directive.tpl.html",
    "<button ng-disabled=\"loading\" type=\"button\" class=\"bigbtn full save\" ng-csv=\"getData()\" lazy-load=\"true\" csv-header=\"csvHeader\" filename=\"{{filename}}\">Export</button>\n" +
    "");
}]);

angular.module("templates/directives/finances/finances-year-slider-directive.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/directives/finances/finances-year-slider-directive.tpl.html",
    "<div>\n" +
    "	<loading-indicator active=\"loading\"></loading-indicator>\n" +
    "	\n" +
    "	<div ng-if=\"!loading\">\n" +
    "		<div ng-if=\"properties.length\">\n" +
    "			<ul rn-carousel rn-carousel-transition=\"slide\" rn-carousel-index=\"carouselIndex\" auto-height=\"finances-year-directive:loaded\">\n" +
    "				<li ng-repeat=\"property in properties\">\n" +
    "					<finances-year property=\"property\" year=\"year\"></finances-year>\n" +
    "				</li>\n" +
    "			</ul>\n" +
    "			<div rn-carousel-indicators ng-if=\"properties.length > 1\" slides=\"properties\" rn-carousel-index=\"carouselIndex\"></div>\n" +
    "		</div>\n" +
    "		\n" +
    "		<div ng-if=\"!properties.length\" class=\"alert warning\">You don't have any properties added yet. Try <a ng-href=\"/app/#!/properties/create\">creating one</a>.</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("templates/directives/menu/menu-directive.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/directives/menu/menu-directive.tpl.html",
    "<div class=\"pure-menu pure-menu-open main-menu\">\n" +
    "	<ul>\n" +
    "		<li ng-class=\"{'pure-menu-selected': (current == 'properties')}\">\n" +
    "			<a href=\"/app/#!/properties\">\n" +
    "				<i class=\"flaticon-home60\"></i>\n" +
    "				<span class=\"pure-hidden-xs\">Properties</span>\n" +
    "			</a>\n" +
    "		</li>\n" +
    "		<li ng-class=\"{'pure-menu-selected': (current == 'finances')}\">\n" +
    "			<a href=\"/app/#!/finances\">\n" +
    "				<i class=\"flaticon-dollars17\"></i>\n" +
    "				<span class=\"pure-hidden-xs\">Finances</span>\n" +
    "			</a>\n" +
    "		</li>\n" +
    "		<li ng-class=\"{'pure-menu-selected': (current == 'receipts')}\">\n" +
    "			<a href=\"/app/#!/receipts\">\n" +
    "				<i class=\"flaticon-paper41\"></i>\n" +
    "				<span class=\"pure-hidden-xs\">Receipts</span>\n" +
    "			</a>\n" +
    "		</li>\n" +
    "		<li ng-class=\"{'pure-menu-selected': (current == 'expenses')}\">\n" +
    "			<a href=\"/app/#!/expenses\">\n" +
    "				<i class=\"flaticon-tag26\"></i>\n" +
    "				<span class=\"pure-hidden-xs\">Expenses</span>\n" +
    "			</a>\n" +
    "		</li>\n" +
    "		<li ng-class=\"{'pure-menu-selected': (current == 'account')}\">\n" +
    "			<a href=\"/app/#!/account\">\n" +
    "				<i class=\"flaticon-tools4\"></i>\n" +
    "				<span class=\"pure-hidden-xs\">Account</span>\n" +
    "			</a>\n" +
    "		</li>\n" +
    "	</ul>\n" +
    "</div>\n" +
    "");
}]);

angular.module("templates/directives/payment/payment-directive.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/directives/payment/payment-directive.tpl.html",
    "<div>\n" +
    "	<ul ng-if=\"properties.length\" class=\"properties\">\n" +
    "		<li ng-repeat=\"property in properties\">\n" +
    "			<div class=\"flex-top\">\n" +
    "				<div class=\"begin\">\n" +
    "					<div class=\"map map-mini\">\n" +
    "						<property-map property=\"property\" size=\"192\"></property-map>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"middle\">\n" +
    "					<div class=\"title\">\n" +
    "						<span class=\"label\">{{property.label}}</span>\n" +
    "						<span class=\"address\">{{property.address}}</span>\n" +
    "					</div>\n" +
    "					<div class=\"details\">\n" +
    "						<div class=\"transaction\" ng-repeat=\"receipt in propertyPayment[property._id].receipts\">\n" +
    "							<span class=\"positive\">{{receipt.amount | shortCurrency}}</span> from <a ng-href=\"{{APP_API}}/receipt/{{receipt._id}}\" target=\"_blank\" class=\"description\">{{receipt.tenant.name}}</a><span class=\"long\"> on <a ng-href=\"{{APP_API}}/receipt/{{receipt._id}}\" target=\"_blank\">{{receipt.created | moment:'MMM D, YYYY'}}</a></span>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"end\">\n" +
    "					<div class=\"rent\" ng-class=\"{vacant: !propertyPayment[property._id].wasRentedBy}\">\n" +
    "						<span ng-show=\"propertyPayment[property._id].balance\">{{propertyPayment[property._id].balance | shortCurrency}}</span>\n" +
    "					</div>\n" +
    "					<div class=\"labels\">\n" +
    "						<span class=\"taglabel warning\" ng-show=\"!propertyPayment[property._id].wasRentedBy\">vacant</span>\n" +
    "						<span class=\"taglabel warning\" ng-show=\"propertyPayment[property._id].wasRentedBy && propertyPayment[property._id].balance && paymentDay == currentDay\">due</span>\n" +
    "						<span class=\"taglabel error\" ng-show=\"propertyPayment[property._id].wasRentedBy && propertyPayment[property._id].balance && paymentDay < currentDay\">late</span>\n" +
    "						<span class=\"taglabel success\" ng-show=\"!propertyPayment[property._id].balance\" >paid</span>\n" +
    "					</div>\n" +
    "					<div class=\"actions\">\n" +
    "						<a class=\"tagbtn\" ng-if=\"!newReceipts[property._id] && propertyPayment[property._id].wasRentedBy && propertyPayment[property._id].balance\" ng-click=\"toggleReceipt(property)\">Receipt</a>\n" +
    "						<a class=\"tagbtn\" ng-if=\"newReceipts[property._id]\" ng-click=\"toggleReceipt(property)\">Cancel</a>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "\n" +
    "			<form ng-show=\"newReceipts[property._id]\" ng-submit=\"pay(property, payment)\">\n" +
    "				<div class=\"alert error\" ng-repeat=\"error in errors.newReceipts[property._id]\">{{error}}</div>\n" +
    "\n" +
    "				<div class=\"field\">\n" +
    "					<input ng-model=\"newReceipts[property._id].amount\" placeholder=\"Amount\" type=\"number\" step=\"any\" min=\"0\">\n" +
    "					<span class=\"taglabel error\">required</span>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"alert warning\">\n" +
    "					<span ng-show=\"newReceipts[property._id].send\">A receipt will be emailed to {{propertyPayment[property._id].wasRentedBy.name}}<span ng-show=\"newReceipts[property._id].amount\"> for {{newReceipts[property._id].amount | shortCurrency}}</span>.</span>\n" +
    "					<span ng-hide=\"newReceipts[property._id].send\">No receipt will be emailed to {{propertyPayment[property._id].wasRentedBy.name}}.</span>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"flex-controls\">\n" +
    "					<div class=\"options\">\n" +
    "						<switch checked-label=\"Email Receipt\" unchecked-label=\"Don't Email Receipt\" ng-model=\"newReceipts[property._id].send\"></switch>\n" +
    "					</div>\n" +
    "					<div class=\"actions\">\n" +
    "						<input ng-show=\"newReceipts[property._id].send\" class=\"bigbtn\" type=\"button\" value=\"Preview\" ng-disabled=\"loading\" ng-click=\"preview(property)\">\n" +
    "						<input class=\"bigbtn save\" type=\"submit\" value=\"Save\" ng-disabled=\"loading\">\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</form>\n" +
    "		</li>\n" +
    "	</ul>\n" +
    "\n" +
    "	<div ng-if=\"!properties.length\" class=\"alert warning\">You don't have any properties added yet. Try <a ng-href=\"/app/#!/properties/create\">creating one</a>.</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("templates/directives/payment/payment-month-directive.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/directives/payment/payment-month-directive.tpl.html",
    "<div>\n" +
    "	<div class=\"flex-top\">\n" +
    "		<div class=\"begin\">\n" +
    "			<div class=\"month\">\n" +
    "				<div class=\"long\">{{payment.date | moment:'MMMM YYYY'}}</div>\n" +
    "				<div class=\"short\">{{payment.date | moment:'MMM YYYY'}}</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"end\">\n" +
    "			<div class=\"rent rent-header\">\n" +
    "				<span ng-if=\"monthlyCurrentBalance\">{{monthlyCurrentBalance | shortCurrency}}</span>\n" +
    "				<span ng-if=\"allPaid\" class=\"positive\">{{monthlyActualIncome | shortCurrency}}</span>\n" +
    "			</div>\n" +
    "			<div class=\"due\">\n" +
    "				<span ng-if=\"dueToday\" class=\"taglabel warning\">due today</span>\n" +
    "				<span ng-if=\"late\" class=\"taglabel error\">late by {{daysUntilPaymentDate}} day<span ng-if=\"daysUntilPaymentDate != 1\">s</span></span>\n" +
    "				<span ng-if=\"dueSoon\" class=\"taglabel warning\">due in {{daysUntilPaymentDate}} day<span ng-if=\"daysUntilPaymentDate != 1\">s</span></span>\n" +
    "				<span ng-if=\"allPaid\" class=\"taglabel success\">all paid</span>\n" +
    "				<span ng-if=\"allVacant\" class=\"taglabel warning\">all vacant</span>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<a ng-if=\"!showProperties\" class=\"show-properties flaticon-expand22\" ng-click=\"toggleProperties()\"></a>\n" +
    "\n" +
    "	<payment ng-if=\"showProperties\" payment=\"payment\" properties=\"properties\"></payment>\n" +
    "</div>\n" +
    "");
}]);

angular.module("templates/directives/property/create-property-directive.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/directives/property/create-property-directive.tpl.html",
    "<form ng-submit=\"createProperty()\">\n" +
    "	<div class=\"alert error\" ng-repeat=\"error in errors.newProperty\">{{error}}</div>\n" +
    "	\n" +
    "	<div class=\"field\">\n" +
    "		<input ng-model=\"newProperty.rent\" placeholder=\"Rent\" type=\"number\" step=\"any\" min=\"0\">\n" +
    "		<span class=\"taglabel error\">required</span>\n" +
    "	</div>\n" +
    "	<div class=\"field\">\n" +
    "		<input ng-model=\"newProperty.optional\" placeholder=\"Label\" type=\"text\">\n" +
    "		<span class=\"taglabel warning\">optional</span>\n" +
    "	</div>\n" +
    "	<div class=\"field\">\n" +
    "		<input ng-model=\"newProperty.address\" placeholder=\"Address\" type=\"text\">\n" +
    "		<span class=\"taglabel error\">required</span>\n" +
    "	</div>\n" +
    "	<div class=\"field\">\n" +
    "		<input ng-model=\"newProperty.city\" placeholder=\"City\" type=\"text\">\n" +
    "		<span class=\"taglabel error\">required</span>\n" +
    "	</div>\n" +
    "	<div class=\"field\">\n" +
    "		<input ng-model=\"newProperty.province\" placeholder=\"Province or State\" type=\"text\">\n" +
    "		<span class=\"taglabel warning\">optional</span>\n" +
    "	</div>\n" +
    "	<div class=\"field\">\n" +
    "		<input ng-model=\"newProperty.country\" placeholder=\"Country\" type=\"text\">\n" +
    "		<span class=\"taglabel error\">required</span>\n" +
    "	</div>\n" +
    "	<div class=\"field\">\n" +
    "		<input ng-model=\"newProperty.postal\" placeholder=\"Postal\" type=\"text\">\n" +
    "		<span class=\"taglabel warning\">optional</span>\n" +
    "	</div>\n" +
    "	\n" +
    "	<div class=\"actions\">\n" +
    "		<input class=\"bigbtn save\" type=\"submit\" value=\"Save\" ng-disabled=\"loading\">\n" +
    "	</div>\n" +
    "</form>\n" +
    "");
}]);

angular.module("templates/directives/property/property-directive.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/directives/property/property-directive.tpl.html",
    "<div>\n" +
    "	<div class=\"flex-top\">\n" +
    "		<div class=\"begin\">\n" +
    "			<div class=\"map\">\n" +
    "				<property-map property=\"property\" size=\"192\"></property-map>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"middle\">\n" +
    "			<div class=\"title\">\n" +
    "				<span ng-show=\"isCurrentlyRented\">\n" +
    "					<span class=\"long\">Rented to <span class=\"person\">{{currentTenant.name}}</span><br /></span>\n" +
    "					<span class=\"short\"><span class=\"person\">{{currentTenant.name}}</span><br /></span>\n" +
    "				</span>\n" +
    "				<span class=\"label\">{{property.label}}</span>\n" +
    "				<span class=\"address\">{{property.address}}</span>\n" +
    "			</div>\n" +
    "			<div class=\"details\">\n" +
    "				<span ng-show=\"property.city\">{{property.city}}</span><span ng-show=\"property.city && property.province\">, </span><span ng-show=\"property.province\">{{property.province}}</span><br />\n" +
    "				<span ng-show=\"property.country\">{{property.country}}<br /></span>\n" +
    "				<span ng-show=\"property.postal\">{{property.postal}}<br /></span>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"end\">\n" +
    "			<div class=\"rent\">{{property.rent | shortCurrency}}</div>\n" +
    "			<div class=\"labels\">\n" +
    "				<span class=\"taglabel success\" ng-if=\"isCurrentlyRented\">rented</span>\n" +
    "				<span class=\"taglabel warning\" ng-if=\"!isCurrentlyRented\">vacant</span>\n" +
    "			</div>\n" +
    "			<div ng-if=\"actions\" class=\"actions\">\n" +
    "				<a class=\"tagbtn\" ng-click=\"startEditProperty(property)\" ng-if=\"!editingProperty && !propertyNewTenant && !showVacateForm\">Edit</a> <a class=\"tagbtn\" ng-click=\"cancelEditProperty(property)\" ng-if=\"editingProperty && !propertyNewTenant\">Cancel</a>\n" +
    "				<span ng-show=\"!editingProperty || propertyNewTenant\">\n" +
    "					<a class=\"tagbtn\" ng-click=\"toggleRentProperty(property)\" ng-if=\"!isCurrentlyRented && !showVacateForm\"><span ng-if=\"!propertyNewTenant\">Rent</span><span ng-if=\"propertyNewTenant\">Cancel</span></a>\n" +
    "					<a class=\"tagbtn\" ng-click=\"toggleVacateProperty()\" ng-if=\"isCurrentlyRented\"><span ng-if=\"!showVacateForm\">Vacate</span><span ng-if=\"showVacateForm\">Cancel</span></a>\n" +
    "				</span>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<property-vacate ng-if=\"showVacateForm\" property=\"property\"></property-vacate>\n" +
    "\n" +
    "	<form ng-show=\"editingProperty && !propertyNewTenant\" ng-submit=\"editProperty(property)\">\n" +
    "		<div class=\"alert error\" ng-repeat=\"error in errors.editingProperty track by $index\">{{error}}</div>\n" +
    "\n" +
    "		<div class=\"field\">\n" +
    "			<input ng-model=\"property.rent\" placeholder=\"Rent\" type=\"number\" step=\"any\" min=\"0\">\n" +
    "			<span class=\"taglabel error\">required</span>\n" +
    "		</div>\n" +
    "		<div class=\"field\">\n" +
    "			<input ng-model=\"property.label\" placeholder=\"Label\" type=\"text\">\n" +
    "			<span class=\"taglabel warning\">optional</span>\n" +
    "		</div>\n" +
    "		<div class=\"field\">\n" +
    "			<input ng-model=\"property.address\" placeholder=\"Address\" type=\"text\">\n" +
    "			<span class=\"taglabel error\">required</span>\n" +
    "		</div>\n" +
    "		<div class=\"field\">\n" +
    "			<input ng-model=\"property.city\" placeholder=\"City\" type=\"text\">\n" +
    "			<span class=\"taglabel error\">required</span>\n" +
    "		</div>\n" +
    "		<div class=\"field\">\n" +
    "			<input ng-model=\"property.province\" placeholder=\"Province or State\" type=\"text\">\n" +
    "			<span class=\"taglabel warning\">optional</span>\n" +
    "		</div>\n" +
    "		<div class=\"field\">\n" +
    "			<input ng-model=\"property.country\" placeholder=\"Country\" type=\"text\">\n" +
    "			<span class=\"taglabel error\">required</span>\n" +
    "		</div>\n" +
    "		<div class=\"field\">\n" +
    "			<input ng-model=\"property.postal\" placeholder=\"Postal\" type=\"text\">\n" +
    "			<span class=\"taglabel warning\">optional</span>\n" +
    "		</div>\n" +
    "\n" +
    "		<ul ng-show=\"property.tenants\" class=\"tenants\">\n" +
    "			<li ng-repeat=\"tenant in property.tenants\">\n" +
    "				<div class=\"labels\">\n" +
    "					<span class=\"taglabel success\" ng-show=\"currentTenant._id == tenant._id\">renting</span>\n" +
    "					<span class=\"taglabel warning\" ng-show=\"currentTenant._id != tenant._id\">moved</span>\n" +
    "				</div>\n" +
    "				<div class=\"title\">{{tenant.name}}</div>\n" +
    "				<div class=\"details\">\n" +
    "					<a ng-href=\"mailto:{{tenant.email}}\" ng-show=\"tenant.email\">{{tenant.email}}<br /></a>\n" +
    "					<a ng-href=\"tel:{{tenant.phone}}\" ng-show=\"tenant.phone\">{{tenant.phone}}<br /></a>\n" +
    "					<span ng-if=\"tenant.deposit\"><span positive-negative=\"tenant.deposit\">{{tenant.deposit | shortCurrency}}</span> Security Deposit<br /></span>\n" +
    "					<span ng-if=\"tenant.start\">Moved in {{tenant.start | moment:'MMM D, YYYY'}}<br /></span>\n" +
    "					<span ng-if=\"tenant.end\">Moved out {{tenant.end | moment:'MMM D, YYYY'}}<br /></span>\n" +
    "					<blockquote ng-if=\"tenant.notes\">{{tenant.notes}}</blockquote>\n" +
    "				</div>\n" +
    "				<div class=\"actions\">\n" +
    "					<a class=\"tagbtn\" ng-click=\"toggleRefundTenant(tenant)\" ng-hide=\"!tenant.deposit || editingTenants[tenant._id]\"><span ng-show=\"!refundingTenants[tenant._id]\">Refund</span><span ng-show=\"refundingTenants[tenant._id]\">Cancel</span></a>\n" +
    "					<a class=\"tagbtn\" ng-click=\"startEditTenant(tenant)\" ng-hide=\"editingTenants[tenant._id] || refundingTenants[tenant._id]\">Edit</a>\n" +
    "					<a class=\"tagbtn\" ng-click=\"cancelEditTenant(tenant)\" ng-show=\"editingTenants[tenant._id]\">Cancel</a>\n" +
    "				</div>\n" +
    "\n" +
    "				<div ng-show=\"editingTenants[tenant._id]\">\n" +
    "					<div class=\"field\">\n" +
    "						<input ng-model=\"tenant.name\" placeholder=\"Name\" type=\"text\">\n" +
    "						<span class=\"taglabel error\">required</span>\n" +
    "					</div>\n" +
    "					<div class=\"field\">\n" +
    "						<input ng-model=\"tenant.email\" placeholder=\"Email\" type=\"text\">\n" +
    "						<span class=\"taglabel error\">required</span>\n" +
    "					</div>\n" +
    "					<div class=\"field\">\n" +
    "						<input ng-model=\"tenant.phone\" placeholder=\"Phone\" type=\"text\">\n" +
    "						<span class=\"taglabel warning\">optional</span>\n" +
    "					</div>\n" +
    "					<div class=\"field\">\n" +
    "						<input ng-disabled=\"hasDeposit(property, tenant)\" ng-model=\"tenant.deposit\" placeholder=\"Deposit\" type=\"number\" step=\"any\" min=\"0\">\n" +
    "						<span class=\"taglabel warning\">optional</span>\n" +
    "					</div>\n" +
    "					<div class=\"field\">\n" +
    "						<input date=\"tenant.start\" placeholder=\"Moving In Date\" type=\"text\" pikaday=\"monthPickerConfig\" readonly value=\"{{tenant.start | moment:'MMMM D, YYYY'}}\">\n" +
    "						<span class=\"taglabel error\">required</span>\n" +
    "					</div>\n" +
    "					<div ng-if=\"tenant.end\" class=\"field\">\n" +
    "						<input date=\"tenant.end\" placeholder=\"Moving Out Date\" type=\"text\" pikaday=\"monthPickerConfig\" readonly value=\"{{tenant.end | moment:'MMMM D, YYYY'}}\">\n" +
    "						<span class=\"taglabel error\">required</span>\n" +
    "					</div>\n" +
    "					<div class=\"field\">\n" +
    "						<input ng-model=\"tenant.notes\" placeholder=\"Notes\" type=\"text\">\n" +
    "						<span class=\"taglabel warning\">optional</span>\n" +
    "					</div>\n" +
    "\n" +
    "					<div ng-show=\"tenant.deposit && !hasDeposit(property, tenant)\">\n" +
    "						<div class=\"alert warning\">\n" +
    "							<span ng-if=\"tenant.send\">A receipt will be emailed <span ng-show=\"tenant.name\">to {{tenant.name}}</span> for {{tenant.deposit | shortCurrency}}.</span>\n" +
    "							<span ng-if=\"!tenant.send\">No receipt will be emailed<span ng-show=\"tenant.name\"> to {{tenant.name}}</span>.</span>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "\n" +
    "					<div class=\"flex-controls\">\n" +
    "						<div ng-show=\"tenant.deposit && !hasDeposit(property, tenant)\" class=\"options\">\n" +
    "							<switch checked-label=\"Email Receipt\" unchecked-label=\"Don't Email Receipt\" ng-model=\"tenant.send\"></switch>\n" +
    "						</div>\n" +
    "						<div class=\"actions\">\n" +
    "							<input ng-show=\"tenant.name && tenant.email && tenant.deposit && !hasDeposit(property, tenant) && tenant.send\" class=\"bigbtn\" type=\"button\" value=\"Preview\" ng-disabled=\"loading\" ng-click=\"preview(tenant, tenant.deposit, 'deposit')\">\n" +
    "							<a class=\"bigbtn delete\" ng-click=\"deleteTenant(property, tenant)\">Delete</a>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div ng-show=\"refundingTenants[tenant._id]\">\n" +
    "					<div class=\"alert error\" ng-repeat=\"error in errors.refundingTenants[tenant._id]\">{{error}}</div>\n" +
    "\n" +
    "					<div class=\"field\">\n" +
    "						<input ng-model=\"refundingTenants[tenant._id].amount\" placeholder=\"Refund\" type=\"number\" step=\"any\" min=\"0\">\n" +
    "						<span class=\"taglabel error\">required</span>\n" +
    "					</div>\n" +
    "					<div class=\"field\">\n" +
    "						<input ng-show=\"(tenant.deposit - refundingTenants[tenant._id].amount) > 0\" ng-model=\"refundingTenants[tenant._id].reason\" placeholder=\"Reason for withholding {{tenant.deposit - refundingTenants[tenant._id].amount | shortCurrency}}\" type=\"text\">\n" +
    "						<span class=\"taglabel error\">required</span>\n" +
    "					</div>\n" +
    "\n" +
    "					<div class=\"alert warning\">\n" +
    "						<span ng-show=\"refundingTenants[tenant._id].send\">A refund receipt will be emailed to {{tenant.name}}<span ng-show=\"refundingTenants[tenant._id].amount\"> for {{refundingTenants[tenant._id].amount | shortCurrency}}</span><span ng-show=\"(tenant.deposit - refundingTenants[tenant._id].amount) > 0 && refundingTenants[tenant._id].reason\"> with {{tenant.deposit - refundingTenants[tenant._id].amount | shortCurrency}} being withheld for \"{{refundingTenants[tenant._id].reason}}\"</span>.</span>\n" +
    "						<span ng-hide=\"refundingTenants[tenant._id].send\">No receipt will be emailed<span ng-show=\"tenant.name\"> to {{tenant.name}}</span>.</span>\n" +
    "					</div>\n" +
    "\n" +
    "					<div class=\"flex-controls\">\n" +
    "						<div class=\"options\">\n" +
    "							<switch checked-label=\"Email Receipt\" unchecked-label=\"Don't Email Receipt\" ng-model=\"refundingTenants[tenant._id].send\"></switch>\n" +
    "						</div>\n" +
    "						<div class=\"actions\">\n" +
    "							<input ng-show=\"refundingTenants[tenant._id].send\" class=\"bigbtn\" type=\"button\" value=\"Preview\" ng-disabled=\"loading\" ng-click=\"preview(tenant, refundingTenants[tenant._id].amount, 'refund', refundingTenants[tenant._id].reason)\">\n" +
    "							<input class=\"bigbtn save\" type=\"button\" ng-click=\"refund(property, tenant)\" value=\"Save\" ng-disabled=\"loading\">\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</li>\n" +
    "		</ul>\n" +
    "\n" +
    "		<div class=\"flex-controls\">\n" +
    "			<div class=\"actions\">\n" +
    "				<input class=\"bigbtn delete\" type=\"button\" value=\"Delete\" ng-disabled=\"loading\" ng-click=\"deleteProperty(property)\">\n" +
    "				<input class=\"bigbtn save\" type=\"submit\" value=\"Save\" ng-disabled=\"loading\">\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</form>\n" +
    "\n" +
    "	<form ng-if=\"propertyNewTenant\" ng-submit=\"editProperty(property)\">\n" +
    "		<div class=\"alert error\" ng-repeat=\"error in errors.editingProperty track by $index\">{{error}}</div>\n" +
    "\n" +
    "		<div class=\"field\">\n" +
    "			<input ng-model=\"propertyNewTenant.name\" placeholder=\"Name\" type=\"text\">\n" +
    "			<span class=\"taglabel error\">required</span>\n" +
    "		</div>\n" +
    "		<div class=\"field\">\n" +
    "			<input ng-model=\"propertyNewTenant.email\" placeholder=\"Email\" type=\"text\">\n" +
    "			<span class=\"taglabel error\">required</span>\n" +
    "		</div>\n" +
    "		<div class=\"field\">\n" +
    "			<input ng-model=\"propertyNewTenant.phone\" placeholder=\"Phone\" type=\"text\">\n" +
    "			<span class=\"taglabel warning\">optional</span>\n" +
    "		</div>\n" +
    "		<div class=\"field\">\n" +
    "			<input ng-model=\"propertyNewTenant.deposit\" placeholder=\"Deposit\" type=\"number\" step=\"any\" min=\"0\">\n" +
    "			<span class=\"taglabel warning\">optional</span>\n" +
    "		</div>\n" +
    "		<div class=\"field\">\n" +
    "			<input date=\"propertyNewTenant.start\" placeholder=\"Moving In Date\" type=\"text\" pikaday=\"monthPickerConfig\" readonly>\n" +
    "			<span class=\"taglabel error\">required</span>\n" +
    "		</div>\n" +
    "		<div class=\"field\">\n" +
    "			<input ng-model=\"propertyNewTenant.notes\" placeholder=\"Notes\" type=\"text\">\n" +
    "			<span class=\"taglabel warning\">optional</span>\n" +
    "		</div>\n" +
    "\n" +
    "		<div ng-if=\"propertyNewTenant.deposit\" class=\"alert warning\">\n" +
    "			<span ng-if=\"propertyNewTenant.send\">A receipt will be emailed <span ng-if=\"propertyNewTenant.name\">to {{propertyNewTenant.name}}</span> for {{propertyNewTenant.deposit | shortCurrency}}.</span>\n" +
    "			<span ng-if=\"!propertyNewTenant.send\">No receipt will be emailed<span ng-if=\"propertyNewTenant.name\"> to {{propertyNewTenant.name}}</span>.</span>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"flex-controls\">\n" +
    "			<div ng-if=\"propertyNewTenant.deposit\" class=\"options\">\n" +
    "				<switch checked-label=\"Email Receipt\" unchecked-label=\"Don't Email Receipt\" ng-model=\"propertyNewTenant.send\"></switch>\n" +
    "			</div>\n" +
    "			<div class=\"actions\">\n" +
    "				<input ng-if=\"propertyNewTenant.name && propertyNewTenant.email && propertyNewTenant.deposit && propertyNewTenant.send\" class=\"bigbtn\" type=\"button\" value=\"Preview\" ng-disabled=\"loading\" ng-click=\"preview(propertyNewTenant, propertyNewTenant.deposit, 'deposit')\">\n" +
    "				<input class=\"bigbtn save\" type=\"submit\" value=\"Save\" ng-disabled=\"loading\">\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</form>\n" +
    "</div>\n" +
    "");
}]);

angular.module("templates/directives/property/property-vacate-directive.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/directives/property/property-vacate-directive.tpl.html",
    "<form ng-submit=\"vacate()\">\n" +
    "	<div class=\"alert error\" ng-repeat=\"error in errors\">{{error}}</div>\n" +
    "\n" +
    "	<div class=\"field\">\n" +
    "		<input date=\"end\" placeholder=\"Moving Out Date\" type=\"text\" pikaday=\"monthPickerConfig\" readonly value=\"{{end | moment:'MMMM D, YYYY'}}\">\n" +
    "		<span class=\"taglabel error\">required</span>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"flex-controls\">\n" +
    "		<div class=\"actions\">\n" +
    "			<input class=\"bigbtn save\" type=\"submit\" value=\"Save\" ng-disabled=\"loading\">\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</form>\n" +
    "");
}]);

angular.module("templates/directives/share-footer-directive.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/directives/share-footer-directive.tpl.html",
    "<footer>\n" +
    "	<section>\n" +
    "		<p>\n" +
    "			<a href=\"/app/#!/terms\">Terms of Service</a> / <a href=\"/app/#!/privacy\">Privacy Policy</a> / <a href=\"http://chesleybrown.ca\" target=\"_blank\">chesleybrown.ca</a>\n" +
    "		</p>\n" +
    "		<div class=\"social\">\n" +
    "			<a href=\"http://facebook.com/RentChek\" target=\"_blank\"><img src=\"/img/social/facebook_64x.png\" alt=\"Facebook\"></a>\n" +
    "			<a href=\"http://twitter.com/RentChek\" target=\"_blank\"><img src=\"/img/social/twitter_64x.png\" alt=\"Twitter\"></a>\n" +
    "		</div>\n" +
    "		<div class=\"donate\">\n" +
    "			<a href=\"https://paypal.me/chesleybrown/5\" target=\"_blank\" class=\"tagbtn\">Like RentChek? Buy Me A Beer :)</a>\n" +
    "		</div>\n" +
    "	</section>\n" +
    "</footer>\n" +
    "");
}]);

angular.module("templates/directives/timeline/timeline-directive.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/directives/timeline/timeline-directive.tpl.html",
    "<div class=\"timeline\">\n" +
    "	<a class=\"next-year bigbtn full\" ng-href=\"/app/#!/{{type}}/{{nextYear}}\">\n" +
    "		<span class=\"flaticon-collapse3\"></span>\n" +
    "		<span class=\"year\">{{nextYear}}</span>\n" +
    "	</a>\n" +
    "	\n" +
    "	<div ng-if=\"!loading\">\n" +
    "		<ul ng-if=\"!errors.length\" class=\"payments\">\n" +
    "			<li ng-if=\"maximumMonth !== null && maximumMonth < 12 && payments.length != 12\">\n" +
    "				<a class=\"add-month\" ng-click=\"addMonth()\">Show {{nextMonth | moment:'MMMM YYYY'}}</a>\n" +
    "			</li>\n" +
    "			<li ng-repeat=\"payment in payments\">\n" +
    "				<payment-month ng-if=\"type == 'receipts'\" payment=\"payment\" properties=\"properties\"></payment-month>\n" +
    "				<expense-month ng-if=\"type == 'expenses'\" payment=\"payment\" properties=\"properties\"></expense-month>\n" +
    "			</li>\n" +
    "		</ul>\n" +
    "		\n" +
    "		<div class=\"alert error\" ng-repeat=\"error in errors\">{{error}}</div>\n" +
    "	</div>\n" +
    "	\n" +
    "	<loading-indicator active=\"loading\"></loading-indicator>\n" +
    "	\n" +
    "	<a ng-if=\"prevYear > minYear\" class=\"prev-year bigbtn full\" ng-href=\"/app/#!/{{type}}/{{prevYear}}\">\n" +
    "		<span class=\"year\">{{prevYear}}</span>\n" +
    "		<span class=\"flaticon-expand22\"></span>\n" +
    "	</a>\n" +
    "</div>\n" +
    "");
}]);

angular.module("templates/layouts/center.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/layouts/center.tpl.html",
    "<div class=\"layout-center\">\n" +
    "	<div class=\"wrapper\">\n" +
    "		<ng-view autoscroll=\"true\"></ng-view>\n" +
    "		\n" +
    "		<share-footer></share-footer>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("templates/layouts/side-menu.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/layouts/side-menu.tpl.html",
    "<div class=\"layout-side-menu\">\n" +
    "	<div ng-add-to-home-screen></div>\n" +
    "	\n" +
    "	<div class=\"wrapper\">\n" +
    "		<div class=\"pure-g\">\n" +
    "			<div class=\"pure-u-md-1-24\"></div>\n" +
    "			\n" +
    "			<div class=\"pure-u-1 pure-u-md-4-24 pure-hidden-xs pure-hidden-sm\">\n" +
    "				<menu class=\"lg\"></menu>\n" +
    "			</div>\n" +
    "			\n" +
    "			<div class=\"pure-u-md-1-24\"></div>\n" +
    "			\n" +
    "			<div class=\"pure-u-1 pure-u-md-17-24\">\n" +
    "				<section class=\"container\">\n" +
    "					<ng-view autoscroll=\"true\"></ng-view>\n" +
    "				</section>\n" +
    "				\n" +
    "				<share-footer></share-footer>\n" +
    "			</div>\n" +
    "			\n" +
    "			<div class=\"pure-u-md-1-24\"></div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	\n" +
    "	<menu class=\"sm pure-hidden-md pure-hidden-lg pure-hidden-xl\"></menu>\n" +
    "</div>\n" +
    "");
}]);
