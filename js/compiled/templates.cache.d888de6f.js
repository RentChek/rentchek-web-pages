angular.module("templates-client", ["templates/controllers/404.tpl.html", "templates/controllers/account/account.tpl.html", "templates/controllers/auth/auth-forgot.tpl.html", "templates/controllers/auth/auth-login.tpl.html", "templates/controllers/auth/auth-reset.tpl.html", "templates/controllers/auth/auth-signup.tpl.html", "templates/controllers/expenses/expenses.tpl.html", "templates/controllers/finances/finances.tpl.html", "templates/controllers/properties/properties.tpl.html", "templates/controllers/receipts/receipts.tpl.html", "templates/directives/expense/expense-directive.tpl.html", "templates/directives/expense/expense-list-directive.tpl.html", "templates/directives/expense/expense-month-directive.tpl.html", "templates/directives/expense/expense-type-directive.tpl.html", "templates/directives/finances/finances-timeline-directive.tpl.html", "templates/directives/finances/finances-year-charts-directive.tpl.html", "templates/directives/finances/finances-year-directive.tpl.html", "templates/directives/finances/finances-year-export-directive.tpl.html", "templates/directives/finances/finances-year-slider-directive.tpl.html", "templates/directives/menu/menu-directive.tpl.html", "templates/directives/payment/payment-directive.tpl.html", "templates/directives/payment/payment-month-directive.tpl.html", "templates/directives/property/create-property-directive.tpl.html", "templates/directives/property/property-directive.tpl.html", "templates/directives/property/property-vacate-directive.tpl.html", "templates/directives/share-footer-directive.tpl.html", "templates/directives/timeline/timeline-directive.tpl.html", "templates/layouts/center.tpl.html", "templates/layouts/side-menu.tpl.html"]);

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
    "		<!-- Plain <a href>, not ng-href/ng-click -- this leaves the Angular\n" +
    "		     app entirely for the new React Native/Expo app served at /v2/,\n" +
    "		     not an in-app route change. Mirrors the same \"Switch to classic\n" +
    "		     version\" button on that app's Account screen. -->\n" +
    "		<a href=\"/v2/\" class=\"tagbtn\">Try the new version</a>\n" +
    "	</div>\n" +
    "\n" +
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
    "				<a href=\"/v2/login\">Nevermind, I remember now!</a>\n" +
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
    "				<a href=\"/v2/signup\">Not a member yet?</a>\n" +
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
    "		<div class=\"alert success\" ng-show=\"saved\">Your new password is set. Try <a href=\"/v2/login\">logging in</a> using it!</div>\n" +
    "		<div class=\"alert error\" ng-repeat=\"error in errors\">{{error}}</div>\n" +
    "		\n" +
    "		<form ng-hide=\"saved\" ng-submit=\"reset()\">\n" +
    "			<input ng-model=\"user.password\" placeholder=\"New Password\" name=\"password\" type=\"password\" autocomplete=\"off\" />\n" +
    "			\n" +
    "			<div class=\"actions\">\n" +
    "				<a href=\"/v2/login\">Nevermind, I remember now!</a>\n" +
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
    "		<div class=\"alert\" ng-class=\"{success: signupCompleted}\">You did it! Now you just need to <a href=\"/v2/login\">login</a>.</div>\n" +
    "		<div class=\"alert\" ng-class=\"{error: status == 409}\">That email has already been used. Maybe just <a href=\"/v2/login\">try logging in</a>?</div>\n" +
    "		<div class=\"alert error\" ng-repeat=\"error in errors\">{{error}}</div>\n" +
    "		\n" +
    "		<a ng-show=\"signupCompleted\" href=\"/v2/login\" class=\"bigbtn full\">Login</a>\n" +
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
    "				<div class=\"alert warning\"><input class=\"agree\" ng-model=\"agreements.terms\" id=\"terms\" type=\"checkbox\" /> <label for=\"terms\">I agree to the <a href=\"/terms\">Terms of Service</a> and <a href=\"/privacy\">Privacy Policy</a> for {{appName}}.</label></div>\n" +
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
    "				<a href=\"/v2/login\">Already a member?</a>\n" +
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
    "			<a href=\"/terms\">Terms of Service</a> / <a href=\"/privacy\">Privacy Policy</a> / <a href=\"/acceptableuse\">Acceptable Use Policy</a> / <a href=\"http://chesleybrown.ca\" target=\"_blank\">chesleybrown.ca</a>\n" +
    "		</p>\n" +
    "		<p>\n" +
    "			Icons made by Freepik from <a href=\"https://www.flaticon.com\" target=\"_blank\">www.flaticon.com</a>\n" +
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
