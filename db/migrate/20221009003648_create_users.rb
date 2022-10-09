class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :fname, null: false
      t.string :lname, null: false
      t.string :email, null: false
      t.date :date_of_birth, null: false
      t.float :weight
      t.string :sex, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.timestamps
    end
    add_index :users, :fname
    add_index :users, :lname
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
  end
end
