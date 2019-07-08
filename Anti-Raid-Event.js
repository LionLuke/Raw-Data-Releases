{
  "name": "Anti Raid Release",
  "temp": "member",
  "event-type": "6",
  "_id": "ioPVo",
  "actions": [
    {
      "member": "2",
      "varName": "member",
      "info": "1",
      "storage": "1",
      "varName2": "user",
      "name": "Store Member Info"
    },
    {
      "server": "0",
      "varName": "",
      "info": "11",
      "storage": "1",
      "varName2": "owner",
      "name": "Store Server Info"
    },
    {
      "member": "2",
      "varName": "owner",
      "info": "22",
      "storage": "1",
      "varName2": "ownertag",
      "name": "Store Member Info"
    },
    {
      "behavior": "0",
      "interpretation": "0",
      "code": "const ms = require('ms')\nconst member = tempVars(\"user\")\n\nms(Date.now()-client.users.get(member).createdTimestamp, {long:true})",
      "storage": "1",
      "varName": "outputcheck",
      "name": "Run Script"
    },
    {
      "storage": "1",
      "varName": "outputcheck",
      "comparison": "5",
      "value": "\"seconds\"",
      "iftrue": "2",
      "iftrueVal": "10",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "outputcheck",
      "comparison": "5",
      "value": "\"minutes\"",
      "iftrue": "2",
      "iftrueVal": "10",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "outputcheck",
      "comparison": "5",
      "value": "\"hours\"",
      "iftrue": "2",
      "iftrueVal": "10",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "behavior": "0",
      "interpretation": "0",
      "code": "var output = tempVars(\"outputcheck\")\nvar check = parseInt(output.replace(\"days\", \"\"));\n\ncheck <= 14;",
      "storage": "1",
      "varName": "tocheck",
      "name": "Run Script"
    },
    {
      "storage": "1",
      "varName": "tocheck",
      "comparison": "2",
      "value": "true",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "member": "2",
      "varName": "member",
      "info": "0",
      "varName2": "",
      "iftrue": "2",
      "iftrueVal": "17",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check If Member"
    },
    {
      "channel": "5",
      "varName": "member",
      "message": "You were banned by an automated system due to having an account younger then 14 days, if you wish to be unbanned please contact **${tempVars(\"ownertag\")}**. Have a nice day 😃 ",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "member": "2",
      "varName": "member",
      "info": "22",
      "storage": "1",
      "varName2": "membertag",
      "name": "Store Member Info"
    },
    {
      "member": "2",
      "varName": "member",
      "info": "2",
      "storage": "1",
      "varName2": "username",
      "name": "Store Member Info"
    },
    {
      "member": "2",
      "varName": "member",
      "info": "16",
      "storage": "1",
      "varName2": "avatar",
      "name": "Store Member Info"
    },
    {
      "info": "0",
      "find": "Logs_Channel_ID_Here",
      "storage": "1",
      "varName": "logs",
      "name": "Find Channel"
    },
    {
      "behavior": "0",
      "interpretation": "0",
      "code": "const { RichEmbed } = require('discord.js')\nconst em = new RichEmbed()\n.setColor(\"#ff0000\")\n.setTitle(\"Logged\")\n.setAuthor(`${tempVars(\"username\")}`, `${tempVars(\"avatar\")}`)\n.setDescription(`The automated anti raid system banned a user \\n \\n User: \\n **${tempVars(\"membertag\")}** \\n \\n Account was **${tempVars(\"outputcheck\")}** old`);\ntempVars(\"logs\").send(em);",
      "storage": "0",
      "varName": "",
      "name": "Run Script"
    },
    {
      "member": "2",
      "varName": "member",
      "reason": "",
      "name": "Ban Member"
    },
    {
      "info": "0",
      "find": "Logs_Channel_ID_Here",
      "storage": "1",
      "varName": "logs",
      "name": "Find Channel"
    },
    {
      "channel": "5",
      "varName": "logs",
      "message": "The system banned a bot that was ${tempVars(\"outputcheck\")} old, because it was a bot there were no proper logs",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    }
  ]
}
