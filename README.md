# Sencha Touch 音声入力プラグイン

Sencha Touchのtextfieldに音声入力を追加するプラグインです。

## Download & Install

Sencha導入済みとします。

    Speech.jsをダウンロードしsenchaフォルダのsrc/pluginディレクトリに配置します。
    
    textfieldのplugins要素に指定します。
    {
        xtype: 'textfield',
        itemId: 'name',
        name: 'name',
        label: '項目',
        required: true,
        plugins : [
            {type: "speech"}
        ]
    }

OK

## notice!!

動作環境；Sencha Touch Version 2.x  
Chrome系ブラウザ（iOS Safariでは動きません）

## History

* Ver0.9 / 2013.06.28 / 公開

