require 'test_helper'

class CaixasControllerTest < ActionDispatch::IntegrationTest
  setup do
    @caixa = caixas(:one)
  end

  test "should get index" do
    get caixas_url
    assert_response :success
  end

  test "should get new" do
    get new_caixa_url
    assert_response :success
  end

  test "should create caixa" do
    assert_difference('Caixa.count') do
      post caixas_url, params: { caixa: { caixa_final: @caixa.caixa_final, caixa_inicial: @caixa.caixa_inicial, cappta: @caixa.cappta, cheque: @caixa.cheque, data: @caixa.data, descricao: @caixa.descricao, dinheiro: @caixa.dinheiro, maquineta_loja: @caixa.maquineta_loja, maquineta_motoboy: @caixa.maquineta_motoboy, mundipagg: @caixa.mundipagg, saida: @caixa.saida } }
    end

    assert_redirected_to caixa_url(Caixa.last)
  end

  test "should show caixa" do
    get caixa_url(@caixa)
    assert_response :success
  end

  test "should get edit" do
    get edit_caixa_url(@caixa)
    assert_response :success
  end

  test "should update caixa" do
    patch caixa_url(@caixa), params: { caixa: { caixa_final: @caixa.caixa_final, caixa_inicial: @caixa.caixa_inicial, cappta: @caixa.cappta, cheque: @caixa.cheque, data: @caixa.data, descricao: @caixa.descricao, dinheiro: @caixa.dinheiro, maquineta_loja: @caixa.maquineta_loja, maquineta_motoboy: @caixa.maquineta_motoboy, mundipagg: @caixa.mundipagg, saida: @caixa.saida } }
    assert_redirected_to caixa_url(@caixa)
  end

  test "should destroy caixa" do
    assert_difference('Caixa.count', -1) do
      delete caixa_url(@caixa)
    end

    assert_redirected_to caixas_url
  end
end
