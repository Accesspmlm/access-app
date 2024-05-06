import React from "react";
import { Pressable } from "react-native";

import {
  Box,
  Modal,
  ModalBackdrop,
  ModalContent,
  Text,
} from "@gluestack-ui/themed";
import { CloseIcon } from "@/assets/icons";
import { ItemOption } from "@/components";
import { Filter } from "@/screens/ListBusiness";

interface ModalFilterBusinessProps {
  showModal: boolean;
  closeModal: () => void;
  filters: Filter[];
  handleChangeFilter: (id: string) => void;
}

const ModalFilterBusiness: React.FC<ModalFilterBusinessProps> = ({
  showModal,
  closeModal,
  filters,
  handleChangeFilter,
}) => {
  return (
    <Modal isOpen={showModal} onClose={closeModal}>
      <ModalBackdrop />
      <ModalContent>
        <Box padding={15}>
          <Box flexDirection="row" justifyContent="space-between">
            <Text size="xl" fontWeight="bold">
              Filtrar
            </Text>
            <Pressable onPress={closeModal}>
              <CloseIcon />
            </Pressable>
          </Box>
          <Box mt={24}>
            <Text size="lg" fontWeight="bold">
              Especialidad
            </Text>
            <Box flexDirection="row" mt={16} flexWrap="wrap" gap={8}>
              {filters.map((filter) => (
                <ItemOption
                  key={filter.id}
                  data={filter}
                  handleChange={handleChangeFilter}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </ModalContent>
    </Modal>
  );
};
export default ModalFilterBusiness;
