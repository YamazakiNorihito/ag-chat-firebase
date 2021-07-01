# STEP1

## プロジェクト作成

```typescript
ng new ag-chat-firebase
```

## bootstrap install

```shell
npm install bootstrap@4.5.0
```

## モックデータクラス作成

```shell
ng g class class/comment
```

## User クラス

```shell
ng g class class/user
```

## DateFormat Pipe

```shell
ng g pipe pipes/comment-date
```

# STEP2

## FireBase

(FireBase Site)[https://firebase.google.com/?hl=ja]

使用するサービス(すべて無料プランで実施)

- (Realtime Database)[https://firebase.google.com/products/realtime-database?hl=ja]
- (Authentication)[https://firebase.google.com/products/auth?hl=ja]
- (Hosting)[https://firebase.google.com/products/hosting?hl=ja]

### 構築手順

1. プロジェクト作成

- プロジェクト名：angular-chat
- Google アナリティクス：無効

2. ウェブアプリ作成

- アプリニックネーム:angular-chat
- FireBaseHosting:ON

3. Firebase CLI（コマンドライン ツール） Install

```shell
npm install -g firebase-tools
```

4. Firebase Hosting へのデプロイ設定

```shell
firebase login
```

以下、２つは Angular の Library で行なうため、実行不要

```shell
firebase init
```

ウェブアプリをデプロイ

```shell
firebase deploy
```

### FirebaseとAngular連携
https://github.com/angular/angularfire

AngularFireをInstallすることによって、連携Moduleを使えるようにする
```shell
ng add @angular/fire 
```
```shell
npm install @types/angularfire --save-dev
```
*--save-dev* はローカルインストールするためのコマンド。
    自動で package.jsonの devDependencies に追記されます。
    dependencies には追記されません。
*npm install -g*がグローバルインストールのコマンド

### Firebase プロジェクト設定 Angular Project Add

Firebase →プロジェクト(今回の場合angular-chat)→左ナビ歯車アイコン→
プロジェクトの設定→マイアプリ→”SDK の設定と構成”の”構成”ラジオボタン押下→アプリのキーと ID が含まれている Firebase 構成オブジェクト: をコピー→/src/environments/environment.ts に設定。内容は実ファイルを見てね
 


## FireRealtimeDatabase 連携

### 環境構築

FireBaseにアクセス→任意にプロジェクト→左メニューRealtimeDatabaseを選択→データベース作成

| 設定| value |
| ---- | ---- |
|ロケーション |   米国|
|セキュリティ |   ロックモード|

ルールタブ（権限設定
```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

### データ作成
<pre>
angular-chat-39a59-default-rtdb
    |
    |--- item
            |
            |--- message:今日も打ったよ
            |--- name:大谷翔平
</pre>


# STEP3

## UI 削除・修正・キャンセル実装

https://fontawesome.com/
```shell
npm install @fortawesome/fontawesome-free@5.14.0 
```

##

```shell

```

##

```shell

```

##

```shell

```

##

```shell

```

##

```shell

```

##

```shell

```

##

```shell

```

##

```shell

```
