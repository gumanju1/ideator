class CreateDemos < ActiveRecord::Migration[8.1]
  def change
    create_table :demos do |t|
      t.string :details
      t.string :writer

      t.timestamps
    end
  end
end
