import { Text } from "react-native-web";
const calcular = (a, b, c, aa, bb, cc) => {
  try {
    const numA = parseInt(a) || 0;
    const numB = parseInt(b) || 0;
    const numC = parseInt(c) || 0;
    const numAa = parseInt(aa) || 1;
    const numBb = parseInt(bb) || 1;
    const numCc = parseInt(cc) || 1;

    if (
      isNaN(numA) ||
      isNaN(numB) ||
      isNaN(numC) ||
      isNaN(numAa) ||
      isNaN(numBb) ||
      isNaN(numCc)
    ) {
      return (
        <Text>
          Erro! Por favor, verifique os valores inseridos nos campos e tente
          novamente!
          {"\n"}
          Apenas números são aceitos.
        </Text>
      );
    }

    let delta =
      Math.pow(numB / numBb, 2) + -4 * (numA / numAa) * (numC / numCc);
    delta = delta.toFixed(2);

    let ev = Math.pow(numB / numBb, 2);
    ev = ev.toFixed(2);

    let res = (
      <Text>
        1) Calculando o Δ da equação completa:
        {"\n"}Δ = b² - 4ac
        {"\n"}Δ = {numB}/{numBb}² - 4 * {numA}/{numAa} * {numC}/{numCc}
        {"\n"}Δ = {ev} - 4 * {numA}/{numAa} * {numC}/{numCc}
        {"\n"}Δ = {delta}
      </Text>
    );

    // ... (código anterior)

    if (delta > 0) {
      res = (
        <>
          {res}
          <Text>Há 2 raízes reais.</Text>
          <Text>2) Aplicando Bhaskara:</Text>
          <View style={{ marginLeft: 20 }}>
            <Text>x = (-b ± √Δ)/2a</Text>
            <Table>
              <Row data={["x'", "", "x''"]} />
              <Row
                data={[
                  `(-${numB}/${numBb} + √${delta})/2.${numA}/${numAa}`,
                  "",
                  `(-${numB}/${numBb} - √${delta})/2.${numA}/${numAa}`,
                ]}
              />
              <Row data={[`x\' = ${x1}`, "", `x\'\' = ${x2}`]} />
            </Table>
            <Row data={[`x\' = ${c1_}`, "", `x\'\' = ${c2_}`]} />
          </View>
        </>
      );
    } else if (delta == 0) {
      res = (
        <>
          {res}
          <Text>Há 1 raiz real.</Text>
          <Text>2) Aplicando Bhaskara:</Text>
          <View style={{ marginLeft: 20 }}>
            <Text>Neste caso, x' = x''</Text>
            <Text>x = (-b ± √Δ)/2a</Text>
            <Table>
              <Row data={["x'", "", "x''"]} />
              <Row
                data={[
                  `(-${numB}/${numBb} + √${delta})/2.${numA}/${numAa}`,
                  "",
                  `(-${numB}/${numBb} - √${delta})/2.${numA}/${numAa}`,
                ]}
              />
              <Row data={[`x\' = ${x1}`, "", `x\'\' = ${x1}`]} />
            </Table>
            <Row data={[`x\' = ${c1_}`, "", `x\'\' = ${c2_}`]} />
            {numB == 0 && numC == 0 && (
              <>
                <Text>Ou Isolando x:</Text>
                <Text>{`${numA}/${numAa}x² = 0`}</Text>
                <Text>{`x² = 0/${numA}/${numAa}`}</Text>
                <Text>{`x = √0`}</Text>
                <Text>{`x = 0`}</Text>
              </>
            )}
          </View>
        </>
      );
    } else {
      res = (
        <>
          {res}
          <Text>Não há raízes reais.</Text>
        </>
      );
    }

    return res;
  } catch (error) {
    return (
      <Text>
        Erro! Por favor, verifique os valores inseridos nos campos e tente
        novamente!
        {"\n"}
        Apenas números são aceitos.
      </Text>
    );
  }
};

export default calcular;
