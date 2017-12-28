# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Caixa.create([{ :data => DateTime.parse("01/12/2017 17:00"), :caixa_inicial => 388.0, :dinheiro => 0.0, :saida => 540.0, :descricao => 'None', :cheque => 70.0, :maquineta_loja => 400.0, :maquineta_motoboy => 468.70, :cappta => 5126.40, :mundipagg => 0.0, :caixa_final => 299.0}, 
            { :data => DateTime.parse("02/12/2017 17:01"), :caixa_inicial => 297.90, :dinheiro => 650.0, :saida => 40.0, :descricao => 'None', :cheque => 0.0, :maquineta_loja => 376.40, :maquineta_motoboy => 0.0, :cappta => 3832.22, :mundipagg => 0.0, :caixa_final => 167.40},
            { :data => DateTime.parse("04/12/2017 17:02"), :caixa_inicial => 167.40, :dinheiro => 350.0, :saida => 0.0, :descricao => 'None', :cheque => 285.70, :maquineta_loja => 376.40, :maquineta_motoboy => 586.55, :cappta => 3610.03, :mundipagg => 172.0, :caixa_final => 326.45}, 
            { :data => DateTime.parse("27/11/2017 17:02"), :caixa_inicial => 266.00, :dinheiro => 800.0, :saida => 50.0, :descricao => 'None', :cheque => 0.0, :maquineta_loja => 300.40, :maquineta_motoboy => 411.40, :cappta => 3862.77, :mundipagg => 37.0, :caixa_final => 306.65} ])