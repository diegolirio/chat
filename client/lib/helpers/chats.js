Template.chats.helpers({

    chats : function() {
        return Chats.find({});
    }

});

Template.chats.events({
	"click button": function(e, template){
		var a = prompt("Informe o nome do Chat");
		console.log(a);
		Chats.insert({descricao: a});
	}
})
