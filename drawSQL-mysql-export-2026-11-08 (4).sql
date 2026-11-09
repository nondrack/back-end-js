-- 1. USUARIO
CREATE TABLE `usuario`(
    `id_usuario` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_pessoa` TINYINT UNSIGNED NOT NULL,
    `login` VARCHAR(30) NOT NULL,
    `senha` VARCHAR(255) NOT NULL,
    `adm` BOOLEAN NOT NULL DEFAULT 0
);
ALTER TABLE `usuario` ADD UNIQUE `usuario_id_pessoa_unique`(`id_pessoa`);
ALTER TABLE `usuario` ADD UNIQUE `usuario_login_unique`(`login`);

-- 2. PRODUTO
CREATE TABLE `produto`(
    `id_produto` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_categoria` TINYINT UNSIGNED NULL, -- Mantido NULL conforme sua alteração
    `nome` VARCHAR(100) NOT NULL,
    `desc_produto` VARCHAR(255) NOT NULL,
    `estoque` TINYINT NOT NULL,
    `ativo` BOOLEAN NOT NULL DEFAULT 1
);

-- 3. ENDERECO
CREATE TABLE `endereco`(
    `id_endereco` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_pessoa` TINYINT UNSIGNED NOT NULL,
    `cep` CHAR(8) NOT NULL,
    `estado` CHAR(2) NOT NULL,
    `cidade` VARCHAR(100) NOT NULL,
    `bairro` VARCHAR(100) NOT NULL,
    `numero` VARCHAR(20) NOT NULL,
    `principal` BOOLEAN NOT NULL
);

-- 4. CONTATO
CREATE TABLE `contato`(
    `id_contato` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_pessoa` TINYINT UNSIGNED NOT NULL,
    `tipo_contato` TINYINT NOT NULL,
    `valor_contato` VARCHAR(100) NOT NULL
);
ALTER TABLE `contato` ADD INDEX `contato_id_pessoa_index`(`id_pessoa`);
ALTER TABLE `contato` ADD UNIQUE `contato_valor_contato_unique`(`valor_contato`);

-- 5. PEDIDO
CREATE TABLE `pedido`(
    `id_pedido` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_pessoa` TINYINT UNSIGNED NOT NULL,
    `num_pedido` TINYINT NOT NULL,
    `data` DATETIME NOT NULL,
    `cancelado` BOOLEAN NOT NULL DEFAULT 0
);
ALTER TABLE `pedido` ADD INDEX `pedido_id_pessoa_index`(`id_pessoa`);
ALTER TABLE `pedido` ADD UNIQUE `pedido_num_pedido_unique`(`num_pedido`);

-- 6. PESSOA
CREATE TABLE `pessoa`(
    `id_pessoa` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nm_pessoa` VARCHAR(50) NOT NULL,
    `dt_nascimento` DATE NOT NULL,
    `ativo` BOOLEAN NOT NULL DEFAULT 1,
    `cpf` VARCHAR(11) NOT NULL,
    `rg` VARCHAR(10) NULL
);
ALTER TABLE `pessoa` ADD UNIQUE `pessoa_cpf_unique`(`cpf`);
ALTER TABLE `pessoa` ADD UNIQUE `pessoa_rg_unique`(`rg`);

-- 7. PAGAMENTO
CREATE TABLE `pagamento`(
    `id_pagamento` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_pedido` TINYINT UNSIGNED NOT NULL,
    `tipo_pagamento` TINYINT NOT NULL
);
ALTER TABLE `pagamento` ADD UNIQUE `pagamento_id_pedido_unique`(`id_pedido`);

-- 8. CATEGORIA
CREATE TABLE `categoria`(
    `id_categoria` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nm_categoria` VARCHAR(10) NOT NULL,
    `ativo` BOOLEAN NOT NULL DEFAULT 1
);

-- 9. ITEM_PEDIDO
CREATE TABLE `item_pedido`(
    `id_item` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_pedido` TINYINT UNSIGNED NOT NULL,
    `id_produto` TINYINT UNSIGNED NOT NULL,
    `quantidade` BIGINT NOT NULL,
    `valor` DECIMAL(8, 2) NOT NULL,
    `desconto` DECIMAL(8, 2) NOT NULL
);

-- ==========================================
-- Bloco de Chaves Estrangeiras (Roda por último)
-- ==========================================
ALTER TABLE `pagamento` ADD CONSTRAINT `pagamento_id_pedido_foreign` FOREIGN KEY(`id_pedido`) REFERENCES `pedido`(`id_pedido`);
ALTER TABLE `contato` ADD CONSTRAINT `contato_id_pessoa_foreign` FOREIGN KEY(`id_pessoa`) REFERENCES `pessoa`(`id_pessoa`);
ALTER TABLE `pedido` ADD CONSTRAINT `pedido_id_pessoa_foreign` FOREIGN KEY(`id_pessoa`) REFERENCES `pessoa`(`id_pessoa`);
ALTER TABLE `endereco` ADD CONSTRAINT `endereco_id_pessoa_foreign` FOREIGN KEY(`id_pessoa`) REFERENCES `pessoa`(`id_pessoa`);
ALTER TABLE `usuario` ADD CONSTRAINT `usuario_id_pessoa_foreign` FOREIGN KEY(`id_pessoa`) REFERENCES `pessoa`(`id_pessoa`);
ALTER TABLE `item_pedido` ADD CONSTRAINT `item_pedido_id_produto_foreign` FOREIGN KEY(`id_produto`) REFERENCES `produto`(`id_produto`);
ALTER TABLE `produto` ADD CONSTRAINT `produto_id_categoria_foreign` FOREIGN KEY(`id_categoria`) REFERENCES `categoria`(`id_categoria`);
ALTER TABLE `item_pedido` ADD CONSTRAINT `item_pedido_id_pedido_foreign` FOREIGN KEY(`id_pedido`) REFERENCES `pedido`(`id_pedido`);
