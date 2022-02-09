CREATE TABLE `cliente` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(40) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `telefone` varchar(15) DEFAULT NULL,
  `endereco` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `cod_cliente_UNIQUE` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `destino` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `pais_destino` varchar(20) DEFAULT NULL,
  `cidade_destino` varchar(40) DEFAULT NULL,
  `preco_destino` double DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `cod_destino_UNIQUE` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `origem` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `pais_origem` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `cidade_origem` varchar(20) DEFAULT NULL,
  `preco_origem` double DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `cod_origem_UNIQUE` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `compra` (
  `cod_compra` int(11) NOT NULL AUTO_INCREMENT,
  `cod_cl_origem_destino` int(11) DEFAULT NULL,
  `data_pedido` date DEFAULT NULL,
  `tipo_pagamento` enum('dinheiro','cartao') DEFAULT NULL,
  PRIMARY KEY (`cod_compra`),
  UNIQUE KEY `cod_compra_UNIQUE` (`cod_compra`),
  KEY `cod_cl_origem_compra_idx` (`cod_cl_origem_destino`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `cl_origem_destino` (
  `cod_cl_origem_destino` int(11) NOT NULL AUTO_INCREMENT,
  `Id_cliente` int(11) DEFAULT NULL,
  `id_origem` int(11) DEFAULT NULL,
  `id_destino` int(11) DEFAULT NULL,
  `data_embarque` date DEFAULT NULL,
  `data_retorno` date DEFAULT NULL,
  `valor_total` float GENERATED ALWAYS AS ((300 + 400)) STORED,
  PRIMARY KEY (`cod_cl_origem_destino`),
  UNIQUE KEY `cod_cl_origem_destino_UNIQUE` (`cod_cl_origem_destino`),
  KEY `cod_cliente_idx` (`Id_cliente`),
  KEY `cod_destino_idx` (`id_destino`),
  KEY `cod_origem_idx` (`id_origem`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci