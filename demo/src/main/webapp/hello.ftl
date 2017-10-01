<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hello Freemarker!</title>
</head>
<body>
<#assign jsonData = param1?eval>
    <#list jsonData?values as v>
    	<h4> ${v}!</h4>
    </#list>
</body>
</html>