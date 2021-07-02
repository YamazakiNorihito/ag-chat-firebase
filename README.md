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

### Firebase と Angular 連携

https://github.com/angular/angularfire

AngularFire を Install することによって、連携 Module を使えるようにする

```shell
ng add @angular/fire
```

```shell
npm install @types/angularfire --save-dev
```

_--save-dev_ はローカルインストールするためのコマンド。
自動で package.json の devDependencies に追記されます。
dependencies には追記されません。
*npm install -g*がグローバルインストールのコマンド

### Firebase プロジェクト設定 Angular Project Add

Firebase → プロジェクト(今回の場合 angular-chat)→ 左ナビ歯車アイコン →
プロジェクトの設定 → マイアプリ →”SDK の設定と構成”の”構成”ラジオボタン押下 → アプリのキーと ID が含まれている Firebase 構成オブジェクト: をコピー →/src/environments/environment.ts に設定。内容は実ファイルを見てね

## FireRealtimeDatabase 連携

### 環境構築

FireBase にアクセス → 任意にプロジェクト → 左メニュー RealtimeDatabase を選択 → データベース作成

| 設定         | value        |
| ------------ | ------------ |
| ロケーション | 米国         |
| セキュリティ | ロックモード |

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

## プロジェクト構成

### コンポーネント

```shell
ng g component caht
```

### Module 分割

(Angular コーディングスタイルガイド)[https://angular.jp/guide/styleguide#%E3%82%A2%E3%83%97%E3%83%AA%E3%81%AE-%E3%83%AB%E3%83%BC%E3%83%88%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB]

(angular 機能別フォルダー 構造ベストプラクティス)[https://angular.jp/guide/styleguide#%E6%A9%9F%E8%83%BD%E5%88%A5%E3%83%95%E3%82%A9%E3%83%AB%E3%83%80%E3%83%BC-%E6%A7%8B%E9%80%A0]

| ModuleType    | 意味                                               |
| ------------- | -------------------------------------------------- |
| RootModule    | アプリケーション全体のモジュール                   |
| SharedModule  | 共通モジュール                                     |
| FeatureModule | 機能モジュール（画面単位）                         |
| CoreModule    | 一度だけ読み込む（angular 7 以降では削除された考え |

```shell
ng g module shared
ng g module core
```

## ヘッダー作成

```shell
ng g component core/components/header

# 余談 module.ts の指定の仕方
## デフォルトは作成ファイルを起点に一番近いModuleファイルに記載される
ng g component core/components/header --module=core


```

## Routing
すでに作成済みの場合は不要。プロジェクト作成時などで初期作成されている場合などなど
```shell
ng g module app-routing --flat --module=app
```

## 404ページ

```shell
ng g component core/components/not-found
```
# STEP4
## FireBase ユーザー認証

Fire→Authentication→Sign-in method →認証プロバイダ[メール / パスワード]

## ユーザー登録画面

```shell
ng g component sign-up
ng g service core/services/auth
```

##

```shell

```

##

```shell

```
