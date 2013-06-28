Ext.define('Ext.plugin.Speech', {
	extend: 'Ext.Component',
	alias: 'plugin.speech',
	init: function(cmp) {
		var me = this;
		cmp.on("painted", this.onAfterRender, this);
	},
	onAfterRender: function(cmp) {
		cmp.down('input').dom.setAttribute(
			"x-webkit-speech", "x-webkit-speech"
		);
	}
});
