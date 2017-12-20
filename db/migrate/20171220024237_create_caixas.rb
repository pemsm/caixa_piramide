class CreateCaixas < ActiveRecord::Migration[5.1]
  def change
    create_table :caixas do |t|
      t.datetime :data
      t.float :caixa_inicial
      t.float :dinheiro
      t.float :saida
      t.text :descricao
      t.float :cheque
      t.float :maquineta_loja
      t.float :maquineta_motoboy
      t.float :cappta
      t.float :mundipagg
      t.float :caixa_final
      
      t.timestamps
    end
  end
end
