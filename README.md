# README

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|sting|null:false , add_index: : true|
|pass|sting|null:false , add_index: : true|
|mail|sting|null : false , unique : true|

### Association
- has_many : groups_users
- has_many : groups , through : groups_users
- has_many : comments

## commentsテーブル

|Column|Type|Opstons|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|comment|text|-------|
|create_at|datetime|-------|
|image|sting|-------|

### Association
- belongs_to :group
- belongs_to :user

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|sting|null : false , unique : true|

### Association
- has_many :groups_users
- has_many :users , through : groups_users
- has_many :comments
