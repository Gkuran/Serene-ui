import React, { useState, useMemo } from "react";
import { View, Text } from "react-native";
import { Grid } from "../Grid/Grid";
import { FormControl } from "../FormControl/FormControl";
import { Switch } from "../Switch/Switch";
import { Tag } from "../Tag/Tag";
import { Modal } from "../Modal/Modal";
import { Button } from "../Button/Button";
import { CardProps } from "../Card/Card";
import { styles } from "./FilteredList.styles";

export interface FilteredListProps {
  /** Array de dados para exibir */
  data: CardProps[];
  /** Tags disponíveis para filtro */
  availableTags?: string[];
  /** Número de colunas no grid */
  numColumns?: 2 | 3;
  /** Placeholder do campo de busca */
  searchPlaceholder?: string;
  /** Label do switch de ordenação */
  sortLabel?: string;
}

export const FilteredList = ({
  data,
  availableTags = [],
  numColumns = 2,
  searchPlaceholder = "Buscar doações...",
  sortLabel = "Apenas disponíveis",
}: FilteredListProps) => {
  const [searchText, setSearchText] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [showOnlyAvailable, setShowOnlyAvailable] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allAvailableTags = [
    "Roupas",
    "Livros",
    "Móveis",
    "Alimentos",
    "Brinquedos",
    "Eletrônicos",
    "Utensílios",
    "Decoração",
    "Esportes",
    "Música",
    "Jogos",
    "Ferramentas",
    "Disponível",
    "Reservado",
    "Entregue",
    "Urgente",
    "Infantil",
    "Adulto",
  ];

  const handleOpenModal = () => {
    setSelectedTags([...activeFilters]);
    setModalVisible(true);
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSaveTags = () => {
    setActiveFilters(selectedTags);
    setModalVisible(false);
  };

  const removeFilter = (tag: string) => {
    setActiveFilters((prev) => prev.filter((t) => t !== tag));
  };

  const filteredData = useMemo(() => {
    let filtered = data.filter((item) => {
      const matchesSearch =
        !searchText ||
        item.title?.toLowerCase().includes(searchText.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchText.toLowerCase());

      const matchesTags =
        activeFilters.length === 0 ||
        activeFilters.every((tag) => {
          const tagLower = tag.toLowerCase();
          return (
            item.title?.toLowerCase().includes(tagLower) ||
            item.description?.toLowerCase().includes(tagLower) ||
            item.status?.toLowerCase().includes(tagLower) ||
            (tagLower === "disponível" && item.status === "available") ||
            (tagLower === "reservado" && item.status === "reserved") ||
            (tagLower === "entregue" && item.status === "delivered") ||
            (tagLower === "indisponível" && item.status === "unavailable")
          );
        });

      const matchesStatus = !showOnlyAvailable || item.status === "available";

      return matchesSearch && matchesTags && matchesStatus;
    });

    return filtered;
  }, [data, searchText, activeFilters, showOnlyAvailable]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.filterRow}>
          <View style={styles.searchContainer}>
            <FormControl
              placeholder={searchPlaceholder}
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>
          <View style={styles.switchContainer}>
            <Switch
              label={sortLabel}
              value={showOnlyAvailable}
              onValueChange={setShowOnlyAvailable}
            />
          </View>
        </View>

        <View style={styles.tagsContainer}>
          {activeFilters.map((tag) => (
            <Tag
              key={`active-${tag}`}
              label={tag}
              variant="success"
              removable={true}
              onRemove={() => removeFilter(tag)}
            />
          ))}
          <Tag
            label="Adicionar tags"
            variant="default"
            onPress={handleOpenModal}
          />
        </View>
      </View>

      <View style={styles.content}>
        {filteredData.length > 0 ? (
          <Grid data={filteredData} numColumns={numColumns} />
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>
              Nenhuma doação encontrada com os filtros aplicados
            </Text>
          </View>
        )}
      </View>

      <Modal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        title="Filtrar por Tags"
        subtitle="Selecione as tags para filtrar as doações"
      >
        <View style={styles.modalTagsContainer}>
          {allAvailableTags.map((tag) => (
            <Tag
              key={tag}
              label={tag}
              variant={selectedTags.includes(tag) ? "default" : "success"}
              onPress={() => handleTagToggle(tag)}
            />
          ))}
        </View>
        <View style={styles.modalButtonContainer}>
          <Button
            title="Aplicar Filtros"
            variant="primary"
            onPress={handleSaveTags}
          />
        </View>
      </Modal>
    </View>
  );
};
